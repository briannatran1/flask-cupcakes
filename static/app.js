"use strict";

const $cupcakeField = $(".cupcake-field");
const $addCupcakeForm = $("#add-cupcake-form");

//TODO: separation of concerns => break up functions
// function generate html element to append
// function that gets list of cupcakes => API logic
// 3 major functions
// clear form inputs
// add flash message

async function addCupcake(evt) {
  evt.preventDefault();

  let flavor = $("#flavor").val();
  let size = $("#size").val();
  let rating = $("#rating").val();
  let image_url = $("#image_url").val();

  const requestBody = { flavor, size, rating, image_url };

  const response = await fetch(
    '/api/cupcakes',
    {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: { "content-type": "application/json" },
    });

  const data = await response.json();

  const cupcake = data.cupcake;

  let $cupcakeDetails = $('<ul>').text(`Cupcake ID: ${cupcake.id}`);

  const $flavor = $('<li>');
  $flavor.text(cupcake.flavor);

  const $size = $('<li>');
  $size.text(cupcake.size);

  const $rating = $('<li>');
  $rating.text(cupcake.rating);

  const $image_url = $('<li>');
  $image_url.text(cupcake.image_url);

  $cupcakeDetails.append($flavor, $size, $rating, $image_url);
  // console.log("Data", data, data.cupcake)

  $cupcakeField.append($cupcakeDetails);
}


$addCupcakeForm.on('submit', addCupcake);