//your JS code here. If required.

// Function to fetch, sort, and log employee details
async function fetchAndSortEmployees() {
    try {
        // Fetch the JSON file (Assuming the file is named "employees.json" and in the same directory)
        const response = await fetch("employees.json");
        
        // Check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert response to JSON
        const employees = await response.json();

        // Sort employees by age in ascending order
        employees.sort((a, b) => a.age - b.age);

        // Log the sorted employee list
        console.log("Sorted Employees by Age:", employees);
    } catch (error) {
        console.error("Error fetching or processing employees:", error);
    }
}

// Call the function
fetchAndSortEmployees();
