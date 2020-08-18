import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const querystring = require('querystring');

const PostPaint = () => {
  const [formState, setFormState] = useState({
    brand: '',
    name: '',
    quantity: '',
  });

  const [paintPosted, setPaintPosted] = useState(false);

  return paintPosted ? (
    <div>
      <h3>Thanks for posting!</h3>
      <Link to="/">Paints</Link>
    </div>
  ) : (
    <form
      onSubmit={(evt) => {
        let qs = querystring.encode(formState);
        axios
          .post(`/api/paint?${qs}`, {})
          .then((data) => {
            if (data.status === 200) {
              setPaintPosted(true);
            }
          })
          .catch((err) => {
            debugger;
          });

        evt.preventDefault();
      }}
    >
      <ul className="form">
        <li>
          <label>brand</label>
          <input
            type="text"
            onChange={(evt) => {
              setFormState({ ...formState, brand: evt.target.value });
            }}
          />
        </li>
        <li>
          <label>name</label>
          <input
            type="text"
            onChange={(evt) => {
              setFormState({ ...formState, name: evt.target.value });
            }}
          />
        </li>
        <li>
          <label>quantity</label>
          <input
            type="text"
            onChange={(evt) => {
              setFormState({ ...formState, quantity: evt.target.value });
            }}
          />
        </li>
        <li>
          <input className="foo" type="submit" value="save" />
        </li>
      </ul>
    </form>
  );
};

export default PostPaint;
