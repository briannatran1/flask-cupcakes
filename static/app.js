"use strict";

const BASE_URL = '/api/cupcakes';

const $addCupcakeButton = $("add-cupcake");
const $cupcakeField = $("cupcake-field");
const $flavorField = $("flavor");
const $sizeField = $("size");
const $ratingField = $("rating");
const $imageUrlField = $("image_url");


$addCupcakeButton.on('click', handleClick);

console.log("Running app...");

async function handleClick(evt) {
  evt.preventDefault();

  await addCupcake();
}

async function addCupcake() {

  const requestBody = {
    flavor: $flavorField.val(),
    size: $sizeField.val(),
    rating: $ratingField.val(),
    imageUrl: $imageUrlField.val()
  };

  console.log("Request Body", requestBody);

  const response = await fetch(
    BASE_URL,
    {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {"content-type": "application/json"},
    });

    const data = await response.json()

    flavor = data.map(cupcake => ({
      flavor: cupcake.flavor
    }));

    console.log("Data", data)


    $cupcakeField.append(flavor);

}