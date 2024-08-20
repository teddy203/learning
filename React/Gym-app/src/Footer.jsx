function Footer() {
  return (
    <footer className="bg-cyan-800 text-white p-4">

<div className="grid grid-cols-4 gap-4">
  <div>
    <ol>
      <li>Opening Times:</li><br />
      <li>Mon-Fri 5am-11pm</li>
      <li>Sat-Sun 6am-9:30pm</li>
      <li>Location: 123 Rong St, K-town</li>
    </ol>
    
  </div>
  <div>
  <ul>
          <li>Contacts:</li><br />
              <li>Physio - Duncan | +254742262012</li>
              <li>Nutritionist - Teddy | +254103606996</li>
              <li>Reception - Jeremiah | +254110380446</li>
            </ul>
  </div>
  <div>
  <ol>
              <li>Trainers</li><br />
              <li>Amos | +254707772715</li>
              <li>Joan | +254751489973</li>
              <li>Allan | +254757076318</li>
              <li>Shawn | +254799001556</li>
            </ol>
  </div>
</div>
    
    </footer>
  );
}

export default Footer;