import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
  const [isLoading, setIsLoading] = useState(true);
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
        'Content-Type': 'application/json',
      },
    })
      .then((x) => x.text())
      .then((t) => {
        setIsLoading(false);
        setPaintChips({ paintChips: JSON.parse(t) });
      });
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>Available Paint</h1>
      <table>
        <thead>
          <tr>
            <td>Brand</td>
            <td>Name</td>
            <td>Quantity</td>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <Link to="/postPaint">Post Paint</Link>
    </div>
  );
};

export default BrowsePaint;
