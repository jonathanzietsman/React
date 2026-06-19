import { useDispatch, useSelector } from 'react-redux';
import { db } from '../config/firebase-config';
import { collection, addDoc, getDocs, query, where, orderBy, doc, updateDoc, increment } from 'firebase/firestore';
import { 
  fetchLogsStart, 
  fetchLogsSuccess, 
  fetchLogsFailure, 
  addLogSuccess 
} from '../features/healthSlice';
import { fetchProjects } from '../features/projectsSlice';

/**
 * Custom React Hook: useHealth
 * Manages all Firestore database operations for the "health_logs" collection.
 * Handles dual-collection synchronization by updating project hour totals.
 */
export const useHealth = () => {
  const dispatch = useDispatch();
  
  // Grab user info to scope logs to the authenticated developer
  const { user } = useSelector((state) => state.auth);

  /**
   * Action: Adds a developer health & session log to Firestore.
   * Updates BOTH the "health_logs" collection and aggregates hours in the "projects" collection.
   * * @param {Object} logData - Contains { projectId, hoursWorked, mood, burnout, notes }
   */
  const addHealthLog = async (logData) => {
    if (!user) return;

    try {
      const newLog = {
        userId: user.uid,
        projectId: logData.projectId,
        hoursWorked: Number(logData.hoursWorked),
        mood: Number(logData.mood),           // Scale 1-5
        burnout: Number(logData.burnout),     // Scale 1-5
        notes: logData.notes,
        createdAt: new Date().toISOString()
      };

      // 1. Save the log document inside the "health_logs" collection
      const docRef = await addDoc(collection(db, 'health_logs'), newLog);
      
      // Send the newly created log to our local Redux state
      dispatch(addLogSuccess({ id: docRef.id, ...newLog }));

      // 2. DUAL-COLLECTION SYNC: Update the associated project's total hours
      const projectDocRef = doc(db, 'projects', logData.projectId);
      await updateDoc(projectDocRef, {
        totalHours: increment(Number(logData.hoursWorked)) // Atomically adds hours in Firestore
      });

      return true;
    } catch (error) {
      console.error("Error saving health log to database: ", error);
      return false;
    }
  };

  /**
   * Action: Fetches all telemetry logs belonging to the logged-in user.
   */
  const fetchHealthLogs = async () => {
    if (!user) return;

    dispatch(fetchLogsStart());

    try {
      const q = query(
        collection(db, 'health_logs'),
        where('userId', '==', user.uid),
        orderBy('createdAt', 'desc')
      );

      const querySnapshot = await getDocs(q);
      const logsArray = [];

      querySnapshot.forEach((doc) => {
        logsArray.push({ id: doc.id, ...doc.data() });
      });

      dispatch(fetchLogsSuccess(logsArray));
    } catch (error) {
      console.error("Error fetching health logs from database: ", error);
      dispatch(fetchLogsFailure(error.message));
    }
  };

  return {
    addHealthLog,
    fetchHealthLogs
  };
};