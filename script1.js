document.addEventListener("DOMContentLoaded", function() {
  // Toggle between sections
  document.getElementById("showQVR").addEventListener("click", function() {
    document.getElementById("qvrSection").style.display = "block";
    document.getElementById("qpSection").style.display = "none";
  });

  document.getElementById("showQP").addEventListener("click", function() {
    document.getElementById("qvrSection").style.display = "none";
    document.getElementById("qpSection").style.display = "block";
  });

  // Toggle Instructions for QVR
  document.getElementById("toggleInstructionsQVR").addEventListener("click", function() {
    const instrContainer = document.getElementById("instructionsQVR");
    instrContainer.style.display = instrContainer.style.display === "block" ? "none" : "block";
    this.textContent = instrContainer.style.display === "block" ? "Hide Instructions" : "Show Instructions";
  });

  // Toggle Instructions for QP
  document.getElementById("toggleInstructionsQP").addEventListener("click", function() {
    const instrContainer = document.getElementById("instructionsQP");
    instrContainer.style.display = instrContainer.style.display === "block" ? "none" : "block";
    this.textContent = instrContainer.style.display === "block" ? "Hide Instructions" : "Show Instructions";
  });

  // Generate QVR text
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

    const outputElem = document.getElementById("outputQVR");
    outputElem.innerText = output;
    outputElem.style.display = "block";
  });

  // Generate QP text
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

    const outputElem = document.getElementById("outputQP");
    outputElem.innerText = output;
    outputElem.style.display = "block";
  });

  // Copy function for QVR output
  document.getElementById("copyQVR").addEventListener("click", function() {
    const outputElem = document.getElementById("outputQVR");
    const outputText = outputElem.innerText.trim();

    if (!outputText || outputText === "Nil") return; // Do nothing if empty

    navigator.clipboard.writeText(outputText).then(() => {
      const copyBtn = document.getElementById("copyQVR");
      copyBtn.classList.add("copied");
      copyBtn.textContent = "Copied";
      setTimeout(() => {
        copyBtn.classList.remove("copied");
        copyBtn.textContent = "Copy";
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

  // Copy function for QP output
  document.getElementById("copyQP").addEventListener("click", function() {
    const outputElem = document.getElementById("outputQP");
    const outputText = outputElem.innerText.trim();

    if (!outputText || outputText === "Nil") return; // Do nothing if empty

    navigator.clipboard.writeText(outputText).then(() => {
      const copyBtn = document.getElementById("copyQP");
      copyBtn.classList.add("copied");
      copyBtn.textContent = "Copied";
      setTimeout(() => {
        copyBtn.classList.remove("copied");
        copyBtn.textContent = "Copy";
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });
});
