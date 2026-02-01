let expenses = [];

function addExpense() {
    const name = document.getElementById("expenseName").value;
    const amount = document.getElementById("expenseAmount").value;
    const category = document.getElementById("expenseCategory").value;

    if (name === "" || amount === "" || category === "") {
        alert("Please fill all fields");
        return;
    }

    expenses.push({
        name,
        amount: Number(amount),
        category
    });

    renderExpenses();

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseCategory").value = "";
}

function renderExpenses() {
    const list = document.getElementById("expenseList");
    const totalEl = document.getElementById("total");

    list.innerHTML = "";
    let total = 0;

    expenses.forEach((exp, index) => {
        total += exp.amount;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${exp.name}</td>
            <td>${exp.category}</td>
            <td>₹${exp.amount}</td>
            <td>
                <button class="delete" onclick="deleteExpense(${index})">
                    Delete
                </button>
            </td>
        `;
        list.appendChild(row);
    });

    totalEl.innerText = total;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
}
