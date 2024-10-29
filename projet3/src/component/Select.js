import React from "react";
import { useState } from "react";

export default function Select() {
  

  return (
    <form className="form-group mt-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </form>
  )
}