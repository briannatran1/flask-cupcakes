"use strict";

const $cupcakeField = $(".cupcake-field");
const $addCupcakeForm = $("#add-cupcake-form");


async function addCupcake(evt) {
  evt.preventDefault();

  let flavor = $("#flavor").val();
  let size = $("#size").val();
  let rating = $("#rating").val();
  let image_url = $("#image_url").val();

  const requestBody = {flavor, size, rating, image_url};

  const response = await fetch(
    '/api/cupcakes',
    {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {"content-type": "application/json"},
    });

    // console.log("RESPONSE", response);

    const data = await response.json();

    // console.log("Data", data, data.cupcake)

    $cupcakeField.append(JSON.stringify(data.cupcake));
  }


$addCupcakeForm.on('submit', addCupcake);