import { useDispatch, useSelector } from 'react-redux';
import { db } from '../config/firebase-config';
import { collection, addDoc, getDocs, query, where, orderBy } from 'firebase/firestore';
import { 
  fetchProjectsStart, 
  fetchProjectsSuccess, 
  fetchProjectsFailure, 
  addProjectSuccess 
} from '../features/projectsSlice';

/**
 * Custom React Hook: useProjects
 * Manages all Firestore database operations for the "projects" collection.
 * Syncs database mutations directly into the global Redux store.
 */
export const useProjects = () => {
  const dispatch = useDispatch();
  
  // Grab the logged-in user's info so we can scope database queries to them
  const { user } = useSelector((state) => state.auth);

  /**
   * Action: Adds a new project record to Firestore.
   * Links the project to the authenticated user's unique ID (uid).
   * * @param {Object} projectData - Contains { name, client }
   */
  const addProject = async (projectData) => {
    if (!user) return;

    try {
      // Build the project object matching our technical requirements
      const newProject = {
        name: projectData.name,
        client: projectData.client,
        userId: user.uid,              // Security scoping: ensures users only see their own work
        totalHours: 0,                 // Starts at zero, incremented by health logs later
        status: 'Active',
        createdAt: new Date().toISOString()
      };

      // Reference the "projects" collection in Firestore
      const docRef = await addDoc(collection(db, 'projects'), newProject);
      
      // Send the newly created project (with its generated database ID) to Redux
      dispatch(addProjectSuccess({ id: docRef.id, ...newProject }));
      return true;
    } catch (error) {
      console.error("Error adding project to database: ", error);
      return false;
    }
  };

  /**
   * Action: Fetches all projects belonging exclusively to the logged-in user.
   * Orders them by creation date descending.
   */
  const fetchProjects = async () => {
    if (!user) return;

    dispatch(fetchProjectsStart());

    try {
      // Formulate a secure Firestore query: 
      // WHERE userId matches current user, ORDER BY creation date
      const q = query(
        collection(db, 'projects'),
        where('userId', '==', user.uid),
        orderBy('createdAt', 'desc')
      );

      const querySnapshot = await getDocs(q);
      const projectsArray = [];

      // Loop through documents returned by database and format them as standard JS objects
      querySnapshot.forEach((doc) => {
        projectsArray.push({ id: doc.id, ...doc.data() });
      });

      // Inject the list into Redux state
      dispatch(fetchProjectsSuccess(projectsArray));
    } catch (error) {
      console.error("Error fetching projects from database: ", error);
      dispatch(fetchProjectsFailure(error.message));
    }
  };

  return {
    addProject,
    fetchProjects
  };
};