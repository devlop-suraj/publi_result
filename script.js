
const data = [
    {"Name": "Aryan Kala", "Roll No": "BE24B004", "Email": "be24b004@smail.iitm.ac.in", "Contact No": 7339945323},
    {"Name": "Vedant MUDRAS", "Roll No": "AE24B054", "Email": "ae24b054@smail.iitm.ac.in", "Contact No": 9702060328},
    {"Name": "Varshini R", "Roll No": "MM24B017", "Email": "mm24b017@smail.iitm.ac.in", "Contact No": 6380615825},
    {"Name": "Nashra Amaan", "Roll No": "MA23C024", "Email": "ma23c024@smail.iitm.ac.in", "Contact No": 9336172979},
    {"Name": "Ananya Malela", "Roll No": "AE24B101", "Email": "ae24b101@smail.iitm.ac.in", "Contact No": 7013436378},
    {"Name": "Ajanta priyadarsini sahoo", "Roll No": "CY24C005", "Email": "cy24c005@smail.iitm.ac.in", "Contact No": 7504818008},
    {"Name": "Siya", "Roll No": "CY24C059", "Email": "cy24c059@smail.iitm.ac.in", "Contact No": 7082787362},
    {"Name": "Tejashwini Ajmera", "Roll No": "CH24B029", "Email": "ch24b029@smail.iitm.ac.in", "Contact No": 8466866026},
    {"Name": "Ramya Seenivasan", "Roll No": "ed24b023", "Email": "ed24b023@smail.iitm.ac.in", "Contact No": 8310916441},
    {"Name": "Khushi", "Roll No": "Cy24c040", "Email": "cy24c040@smail.iitm.ac.in", "Contact No": 8054892000},
    {"Name": "Sophiya Asem", "Roll No": "cy24c060", "Email": "cy24c060@smail.iitm.ac.in", "Contact No": 8787346505},
    {"Name": "KARNIKA SAMYUKTHA C U", "Roll No": "EE24B114", "Email": "ee24b114@smail.iitm.ac.in", "Contact No": 9345567136},
    {"Name": "Shafna yasmin", "Roll No": "NA24B068", "Email": "na24b068@smail.iitm.ac.in", "Contact No": 7356819471},
    {"Name": "Donthi Rahitya", "Roll No": "MM24B004", "Email": "rahithya1806@gmail.com", "Contact No": 8688827689},
    {"Name": "K S VASAVI", "Roll No": "bs24b039", "Email": "bs24b039@smail.iitm.ac.in", "Contact No": 9150265544},
    {"Name": "Himadri", "Roll No": "CY24C033", "Email": "cy24c033@smail.iitm.ac.in", "Contact No": 9343070530},
    {"Name": "Mohnish", "Roll No": "EE24B041", "Email": "rmohnish06@gmail.com", "Contact No": 9444715541},
    {"Name": "V Sanjesh", "Roll No": "ae24b051", "Email": "ae24b051@smail.iitm.ac.in", "Contact No": 7483125099},
    {"Name": "Naghul Pranav", "Roll No": "ch24b071", "Email": "ch24b071@smail.iitm.ac.in", "Contact No": 7010722384},
    {"Name": "Sahil Meel", "Roll No": "ph24b016", "Email": "ph24b016@smail.iitm.ac.in", "Contact No": 8107895898},
    {"Name": "Arun patel", "Roll No": "Bs24b007", "Email": "khushalpatel23456@gmail.com", "Contact No": 9001293698},
    {"Name": "Sanskar Gunde", "Roll No": "MM24B005", "Email": "mm24b005@smail.iitm.ac.in", "Contact No": 8857035293},
    {"Name": "Gnanesh kumar k", "Roll No": "ed24b056", "Email": "ed24b056@smail.iitm.ac.in", "Contact No": 9705549064},
    {"Name": "Aashish", "Roll No": "Ce24b003", "Email": "ce24b003@smail.iitm.ac.in", "Contact No": 9182013579},
    {"Name": "Param Shah", "Roll No": "CE24B097", "Email": "ce24b097@smail.iitm.ac.in", "Contact No": 9820965655},
    {"Name": "Nithin Ambati", "Roll No": "CE24B042", "Email": "ce24b042@smail.iitm.ac.in", "Contact No": 9573614564},
    {"Name": "Amber Srivastava", "Roll No": "CH24B033", "Email": "ch24b033@smail.iitm.ac.in", "Contact No": 9559972981},
    {"Name": "Mayur Panchal", "Roll No": "MM24B041", "Email": "panchalmayur7106@gmail.com", "Contact No": 9898623309},
    {"Name": "Saksham Rai", "Roll No": "MM24B014", "Email": "mm24b014@smail.iitm.ac.in", "Contact No": 7358203667},
    {"Name": "Aarush.C", "Roll No": "CS24B001", "Email": "cs24b001@smail.iitm.ac.in", "Contact No": 9353497822},
    {"Name": "Aditya", "Roll No": "BE24B017", "Email": "be24b017@smail.iitm.ac.in", "Contact No": 9264943215},
    {"Name": "Arjith Akes M", "Roll No": "ME24B087", "Email": "me24b087@smail.iitm.ac.in", "Contact No": 9188071136},
    {"Name": "Prajwal N", "Roll No": "NA24B062", "Email": "na24b062@smail.iitm.ac.in", "Contact No": 9353239891},
    {"Name": "Shiva kamal naik", "Roll No": "CH24B106", "Email": "ch24b106@smail.iitm.ac.in", "Contact No": 9550089475},
    {"Name": "K RAHUL", "Roll No": "CE24B079", "Email": "ce24b079@smail.iitm.ac.in", "Contact No": 7893170469},
    {"Name": "vismay shah", "Roll No": "ae24b026", "Email": "vismayshah121@gmail.com", "Contact No": 9408477966},
    {"Name": "Bharathi Sankar R", "Roll No": "md24b006", "Email": "md24b006@smail.iitm.ac.in", "Contact No": 8778355520},
    {"Name": "Ravichandra bhure", "Roll No": "BS24B029", "Email": "bs24b029@smail.iitm.ac.in", "Contact No": 9019050171},
    {"Name": "P.S.S.Amruth", "Roll No": "EE24B052", "Email": "ee24b052@smail.iitm.ac.in", "Contact No": 8688839888},
    {"Name": "Sujal tiwari", "Roll No": "BS24B034", "Email": "bs24b034@smail.iitm.ac.in", "Contact No": 9340559991},
    {"Name": "Arnav Rajesh Tambe", "Roll No": "Me24b067", "Email": "me24b067@smail.iitm.ac.in", "Contact No": 9930436478},
    {"Name": "HARSH KUMAR", "Roll No": "BS24B019", "Email": "bs24b019@smail.iitm.ac.in", "Contact No": 9837290423},
    {"Name": "Kailash L", "Roll No": "am24m009", "Email": "kailash19599@gmail.com", "Contact No": 9789518749},
    {"Name": "Rithik Sandron AVB", "Roll No": "EE24B140", "Email": "ee24b140@smail.iitm.ac.in", "Contact No": 6369431907}
  ];
  
  
  function checkResult() {
    const rollNoInput = document.getElementById('rollNo').value.trim().toUpperCase();;
  
    if (!rollNoInput) {
      alert("Please enter a roll number.");
      return;
    }
  
    const student = data.find(row => row["Roll No"].toUpperCase() === rollNoInput);
  
    if (student) {
      localStorage.setItem('studentData', JSON.stringify(student));
      localStorage.setItem('found', 'true');
    } else {
      localStorage.setItem('found', 'false');
    }
  
    window.location.href = 'result.html';
  }
  
  function displayResult() {
    const resultContainer = document.getElementById('resultContainer');
    const found = localStorage.getItem('found');
  
    if (found === 'true') {
      const student = JSON.parse(localStorage.getItem('studentData'));
      resultContainer.innerHTML = `
        <h2>Hi, ${student.Name}</h2>
        <p>Congratulations on getting selected to be part of the Publicity team! 🎊🎊 We are thrilled to have you join us and look forward to your active participation in making Shaastra a success.</p>
        <p><strong>Name:</strong> ${student.Name}<br>
        <strong>Roll No.:</strong> ${student["Roll No"]}<br>
        <strong>Email ID:</strong> ${student.Email}<br>
        <strong>Contact No.:</strong> ${student["Contact No"]}</p>
        <p>This year promises to be an exciting journey as we work together on various initiatives and ideas to elevate Shaastra’s presence. Welcome aboard, and let’s make this Shaastra unforgettable!</p>
        <p>Warm regards,<br>Sathwik Anumala (Publicity Core)</p>
      `;
    } else {
      resultContainer.innerHTML = `
        <p>Thank you for your interest in joining the Publicity Team. Although we couldn't include you this time, we appreciate your enthusiasm and encourage you to stay engaged with Shaastra.</p>
      `;
    }
  }
  
  // Call displayResult() only on result.html page
  if (window.location.pathname.includes("result.html")) {
    displayResult();
  }
  