const resultDiv = document.getElementById('result');
const found = localStorage.getItem('found');

if (found === 'true') {
  const student = JSON.parse(localStorage.getItem('studentData'));
  resultDiv.innerHTML = `
    <h2>Hi, ${student.name}</h2>
    <p>Congratulations on getting selected to be part of the Publicity team! 🎊🎊 We are thrilled to have you join us and look forward to your active participation in making Shaastra a success.</p>
    <p><strong>Please find your details below:</strong></p>
    <p>Name: ${student.name}</p>
    <p>Roll No.: ${student.rollNo}</p>
    <p>Email ID: ${student.email}</p>
    <p>Contact No.: ${student.contact}</p>
    <p>This year promises to be an exciting journey as we work together on various initiatives and ideas to elevate Shaastra’s presence. The entire Publicity team is eager to see your contributions and enthusiasm in action.</p>
    <p>If you have any questions or need assistance, please feel free to reach out.</p>
    <p>Warm regards,<br>Sathwik Anumala (Publicity Core)</p>
    <h3>Hey!! Welcome</h3>
  `;
} else {
  resultDiv.innerHTML = `
    <h2>Thank you for your interest!</h2>
    <p>Thank you for your interest in joining the Publicity Team. Although we couldn't include you this time, we appreciate your enthusiasm and encourage you to stay engaged with Shaastra.</p>
  `;
}
