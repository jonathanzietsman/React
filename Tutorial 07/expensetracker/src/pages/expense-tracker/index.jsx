import { useState } from "react";
import { signOut } from "firebase/auth";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { auth } from "../../config/firebase-config";

const formatAmount = (amount) => {
    const num = Math.abs(Number(amount));
    return `R${num.toLocaleString("en-ZA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
};

export const ExpenseTracker = () => {
    const { addTransaction } = useAddTransaction();
    const { transactions, transactionsTotals } = useGetTransactions();
    const { name, profilePhoto } = useGetUserInfo();
    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expense");

    const { balance, income, expenses } = transactionsTotals;

    const onSubmit = async (e) => {
        e.preventDefault();
        addTransaction({ description, transactionAmount, transactionType });

        setDescription("");
        setTransactionAmount(0);
    };

    const signUserOut = async () => {
        try {
            await signOut(auth);
            localStorage.clear();
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <div className="header-brand">
                    <div className="header-logo">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div>
                        <h1>Expense Tracker</h1>
                        <p className="header-subtitle">Welcome back, {name}</p>
                    </div>
                </div>

                {profilePhoto && (
                    <div className="header-profile">
                        <img
                            className="profile-photo"
                            src={profilePhoto}
                            alt={`${name}'s profile`}
                        />
                        <button
                            type="button"
                            className="sign-out-button"
                            onClick={signUserOut}
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </header>

            <div className="dashboard-grid">
                <main className="dashboard-main">
                    <section className="kpi-grid" aria-label="Financial summary">
                        <article className="kpi-card kpi-card--balance">
                            <div className="kpi-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="kpi-card__content">
                                <span className="kpi-card__label">Your Balance</span>
                                <span className="kpi-card__value">
                                    {balance >= 0
                                        ? formatAmount(balance)
                                        : `-${formatAmount(balance)}`}
                                </span>
                            </div>
                        </article>

                        <article className="kpi-card kpi-card--income">
                            <div className="kpi-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M12 19V5M5 12l7-7 7 7"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="kpi-card__content">
                                <span className="kpi-card__label">Income</span>
                                <span className="kpi-card__value">{formatAmount(income)}</span>
                            </div>
                        </article>

                        <article className="kpi-card kpi-card--expense">
                            <div className="kpi-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M12 5v14M19 12l-7 7-7-7"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="kpi-card__content">
                                <span className="kpi-card__label">Expenses</span>
                                <span className="kpi-card__value">{formatAmount(expenses)}</span>
                            </div>
                        </article>
                    </section>

                    <section className="add-transaction-section">
                        <h2 className="section-title">Add Transaction</h2>
                        <form className="add-transaction" onSubmit={onSubmit}>
                            <div className="form-field">
                                <input
                                    type="text"
                                    id="description"
                                    className="form-input"
                                    placeholder=" "
                                    value={description}
                                    required
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <label htmlFor="description" className="form-label">
                                    Transaction name
                                </label>
                            </div>

                            <div className="form-field">
                                <input
                                    type="number"
                                    id="amount"
                                    className="form-input"
                                    placeholder=" "
                                    value={transactionAmount === 0 ? "" : transactionAmount}
                                    required
                                    min="0"
                                    step="0.01"
                                    onChange={(e) =>
                                        setTransactionAmount(e.target.value)
                                    }
                                />
                                <label htmlFor="amount" className="form-label">
                                    Amount (R)
                                </label>
                            </div>

                            <div className="type-toggle" role="group" aria-label="Transaction type">
                                <button
                                    type="button"
                                    className={`type-toggle__btn ${
                                        transactionType === "expense"
                                            ? "type-toggle__btn--active type-toggle__btn--expense"
                                            : ""
                                    }`}
                                    onClick={() => setTransactionType("expense")}
                                >
                                    Expense
                                </button>
                                <button
                                    type="button"
                                    className={`type-toggle__btn ${
                                        transactionType === "income"
                                            ? "type-toggle__btn--active type-toggle__btn--income"
                                            : ""
                                    }`}
                                    onClick={() => setTransactionType("income")}
                                >
                                    Income
                                </button>
                            </div>

                            <button type="submit" className="submit-button">
                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M12 5v14M5 12h14"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                Add Transaction
                            </button>
                        </form>
                    </section>
                </main>

                <aside className="dashboard-sidebar">
                    <section className="transactions-panel">
                        <div className="transactions-panel__header">
                            <h2 className="section-title">Recent Activity</h2>
                            <span className="transactions-count">
                                {transactions.length}{" "}
                                {transactions.length === 1 ? "transaction" : "transactions"}
                            </span>
                        </div>

                        <div className="transaction-list">
                            {transactions.length === 0 ? (
                                <div className="transaction-empty">
                                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path
                                            d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <rect
                                            x="9"
                                            y="3"
                                            width="6"
                                            height="4"
                                            rx="1"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                    <p>No transactions yet</p>
                                    <span>Add your first transaction above</span>
                                </div>
                            ) : (
                                transactions.map((transaction) => {
                                    const {
                                        id,
                                        description,
                                        transactionAmount,
                                        transactionType,
                                    } = transaction;
                                    const isExpense = transactionType === "expense";

                                    return (
                                        <article
                                            key={id}
                                            className={`transaction-row ${
                                                isExpense
                                                    ? "transaction-row--expense"
                                                    : "transaction-row--income"
                                            }`}
                                        >
                                            <div className="transaction-row__info">
                                                <span className="transaction-row__description">
                                                    {description}
                                                </span>
                                                <span
                                                    className={`transaction-badge ${
                                                        isExpense
                                                            ? "transaction-badge--expense"
                                                            : "transaction-badge--income"
                                                    }`}
                                                >
                                                    {transactionType}
                                                </span>
                                            </div>
                                            <span
                                                className={`transaction-row__amount ${
                                                    isExpense
                                                        ? "transaction-row__amount--expense"
                                                        : "transaction-row__amount--income"
                                                }`}
                                            >
                                                {isExpense ? "-" : "+"}
                                                {formatAmount(transactionAmount)}
                                            </span>
                                        </article>
                                    );
                                })
                            )}
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    );
};

/*
 * =============================================================================
 * ORIGINAL TEXTBOOK JSX (commented out — kept for reference)
 * =============================================================================
 * Markup changes mirror the CSS deviations documented at the top of styles.css.
 *
 * - <div className="expense-tracker">  →  <div className="dashboard">
 * - Balance/income/expense divs        →  .kpi-card KPI cards with icons
 * - Radio buttons for type             →  .type-toggle segmented buttons
 * - Plain <input> placeholders         →  .form-field floating labels
 * - Separate .transactions <ul><li>    →  .transaction-list activity feed
 * - Inline style={{color: ...}}        →  .transaction-badge CSS classes
 * - Missing key on <li>                →  key={id} on each transaction row
 * =============================================================================

    return (
        <>
            <div className="expense-tracker">
                <div className="container">
                    <h1>{name}'s Expense Tracker</h1>
                    <div className="balance">
                        <h3>Your Balance</h3>
                        {balance >= 0 ? <h2> R{balance} </h2> : <h2> -R{balance*-1}</h2>}
                    </div>
                    <div className="summary">
                        <div className="income">
                            <h4>Income</h4>
                            <p>R{income}</p>
                        </div>
                        <div className="expense">
                            <h4>Expense</h4>
                            <p>R{expenses}</p>
                        </div>
                    </div>
                    <form className="add-transaction" onSubmit={onSubmit}>
                        <input type="text"
                            placeholder="Enter transaction name"
                            value={description}
                            required
                            onChange={(e) => setDescription(e.target.value)} />

                        <input type="number"
                            placeholder="Enter transaction amount"
                            value={transactionAmount}
                            required
                            onChange={(e) => setTransactionAmount(e.target.value)}/>

                        <input type="radio"
                            id="expense"
                            value="expense"
                            checked={transactionType === "expense"}
                            onChange={(e) => setTransactionType(e.target.value)} />

                        <label htmlFor="expense">Expense</label>

                        <input type="radio"
                            id="income"
                            value="income"
                            checked={transactionType === "income"}
                            onChange={(e) => setTransactionType(e.target.value)}/>

                        <label htmlFor="income">Income</label>

                        <button type="submit">Add Transaction</button>
                    </form>
                </div>
                {profilePhoto && (
                    <div className='profile'>
                        <img className='profile-photo' src={profilePhoto} />
                        <button className='sign-out-button' onClick={signUserOut}>
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
            <div className="transactions">
                <h3>Transactions</h3>
                <ul>
                    {transactions.map((transaction) => {
                        const { description, transactionAmount, transactionType} = transaction;

                        return (
                            <li>
                                <h4> {description} </h4>
                                <p>
                                    {transactionAmount} - <label style={{color: transactionType === "expense" ? "red" : "green"}}>{transactionType}</label>
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
*/
