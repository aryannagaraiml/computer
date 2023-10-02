        // Function to handle password verification
        function verifyPassword(event) {
            // Get the entered password
            const enteredPassword = event.target.value;
            
            // Replace this with your correct password
            const correctPassword = "rosewood";

            // Check if the entered password is correct
            if (enteredPassword === correctPassword) {
                // Redirect to a different link (change the URL)
                window.location.href = "page.html"; // Replace with your desired URL
            } else {
                // Show an alert for incorrect password
                alert("Incorrect password. Please try again.");
                // Clear the input field
                event.target.value = "";
            }
        }

        // Listen for the "keydown" event on the input field
        document.getElementById("input").addEventListener("keydown", function (event) {
            // Check if the Enter key (key code 13) is pressed
            if (event.keyCode === 13) {
                verifyPassword(event);
            }
        });