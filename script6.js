/*function submitForm() {
    // Get the input values
    var name = document.getElementById("nameInput").value;
    var rollNumber  = document.getElementById("rollnoInput").value;
    var hall  = document.getElementById("addressInput").value;
    var phoneNumber = document.getElementById("phoneInput").value;
    var placeOfVisit = document.getElementById("placeInput").value;

    // Create a new object to store the input values
    var entryExit = {
        name: nameInput,
        rollNumber  : rollnoInput,
        hall : addressInput,
        phoneNumber : phoneInput,
        placeOfVisit: placeInput
    };

    // Convert the object to a JSON string
    var entryExitJson = JSON.stringify(entryExit);

    // Send the JSON data to the server
    
    console.log(entryExitJson);

    // Reset the form
    document.getElementById("nameInput").value = "";
    document.getElementById("rollnoInput").value = "";
    document.getElementById("addressInput").value = "";
    document.getElementById("phoneInput").value = "";
    document.getElementById("placeInput").value = "";
}*/


		// Define a function to handle form submission
		function submitForm() {
			// Get the form values
            var name = document.getElementById("nameInput").value;
            var rollNumber  = document.getElementById("rollnoInput").value;
            var hall  = document.getElementById("addressInput").value;
            var phoneNumber = document.getElementById("phoneInput").value;
            var placeOfVisit = document.getElementById("placeInput").value;
			
			// Do any necessary data validation
			
			// Send the data to the server 
			
			fetch('/api/data-entry', {
				method: 'POST',
				body: JSON.stringify({
					name: nameInput,
                    rollNumber  : rollnoInput,
                    hall : addressInput,
                    phoneNumber : phoneInput,
                    placeOfVisit: placeInput
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(response => response.json())
			.then(data => {
				// Handle success or error response from server
				console.log(data);
				alert('Data entry saved successfully');
			})
			.catch(error => {
				console.error(error);
				alert('Error saving data entry');
			});
			
			// Reset the form
			document.getElementById('entryForm').reset();
		}
