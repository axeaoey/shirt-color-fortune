import { useState } from 'react';

export default function Page() {
  const [birthDate, setBirthDate] = useState("");
  const [luckyColor, setLuckyColor] = useState(null);

  const calculateLuckyColor = (date) => {
    //สมมติการคำนวณสีเสื้อมงคลโดยใช้วันเกิด
    const day = new Date(date).getDay();
    const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
    return colors[day];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLuckyColor(calculateLuckyColor(birthDate));
  };

  return (
    <div>
      <h1>เช็คสีเสื้อมงคล</h1>
      <form onSubmit={handleSubmit}>
        <label>กรอกวันเกิดของคุณ: </label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button type="submit">คำนวณสีเสื้อมงคล</button>
      </form>
      {luckyColor && (
        <p>สีเสื้อมงคลสำหรับคุณในวันนี้คือ: <strong>{luckyColor}</strong></p>
      )}
    </div>
  );
}