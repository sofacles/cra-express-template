import React, { useEffect, useState } from 'react';

const BrowsePaint = () => {
  const [paintChips, setPaintChips] = useState({
    paintChips: [
      {
        rgb: '',
        brand: '',
        name: '',
        quantity: '',
        email: '',
        _id: '1',
      },
    ],
  });
  let tableRows = paintChips.paintChips.map((chip) => {
    return (
      <tr key={chip._id}>
        <td>{chip.brand}</td>
        <td>{chip.name}</td>
        <td>{chip.quantity}</td>
      </tr>
    );
  });

  useEffect(() => {
    fetch(`/api/paints`, {
        headers: {
        'Content-Type': 'application/json'
      }})
      .then((x) => x.text())
      .then((t) => {
        setPaintChips({ paintChips: JSON.parse(t) });
      });
  }, []);

  return (
    <div>
      <h1>Available Paint</h1>
      <table>
        <thead>
          <tr>
            <td>brand</td>
            <td>name</td>
            <td>quantity</td>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default BrowsePaint;
