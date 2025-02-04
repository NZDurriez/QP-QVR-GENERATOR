document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("showQVR").addEventListener("click", function() {
        document.getElementById("qvrSection").style.display = "block";
        document.getElementById("qpSection").style.display = "none";
    });

    document.getElementById("showQP").addEventListener("click", function() {
        document.getElementById("qvrSection").style.display = "none";
        document.getElementById("qpSection").style.display = "block";
    });

    document.getElementById("generateQVR").addEventListener("click", function() {
        let plate = document.getElementById("plate").value.toUpperCase() || "Nil";
        let owner = document.getElementById("owner").value || "Nil";
        let woF = document.getElementById("woF").value || "Nil";
        let rego = document.getElementById("rego").value || "Nil";
        let make = document.getElementById("make").value || "Nil";
        let model = document.getElementById("model").value || "Nil";
        let year = document.getElementById("year").value || "Nil";
        let color = document.getElementById("color").value || "Nil";
        let flags = document.getElementById("flags").value || "Nil";

        const output = `~y~Plate:~b~${plate} ~y~Make:~b~${make} ~y~Model:~b~${model} ~y~Colour:~b~${color} ~y~Year:~b~${year} ~y~Registered Owner:~b~${owner} ~y~WOF:~b~${woF} ~y~REG:~b~${rego} ~y~Flags:~b~${flags}`;

        document.getElementById("outputQVR").innerText = output;
        document.getElementById("outputQVR").style.display = "block";
    });

    document.getElementById("generateQP").addEventListener("click", function() {
        const firstName = document.getElementById("firstName").value || "Nil";
        const lastName = document.getElementById("lastName").value || "Nil";
        const age = document.getElementById("age").value || "Nil";
        const address = document.getElementById("address").value || "Nil";
        const occupation = document.getElementById("occupation").value || "Nil";

        let license = "Nil";
        document.querySelectorAll('input[name="license"]:checked').forEach(choice => {
            license = choice.value;
        });

        let otherLicenses = [];
        document.querySelectorAll('input[name="otherLicenses"]:checked').forEach(choice => {
            otherLicenses.push(choice.value);
        });

        const flags = document.getElementById("qpFlags").value || "Nil";

        let allLicenses = [];
        if (license !== "Nil") {
            allLicenses.push(license);
        }
        if (otherLicenses.length > 0) {
            allLicenses = allLicenses.concat(otherLicenses);
        }

        const output = `~y~First Name:~b~${firstName} ~y~Last Name:~b~${lastName} ~y~Age:~b~${age} ~y~Address:~b~${address} ~y~Occupation:~b~${occupation} ~y~Licenses:~b~${allLicenses.join(", ") || "Nil"} ~y~Flags:~b~${flags}`;

        document.getElementById("outputQP").innerText = output;
        document.getElementById("outputQP").style.display = "block";
    });
});
