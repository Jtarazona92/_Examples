// As the last step of your lab, hook this up to indext.html
async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.main_form');
  form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
    console.log('form submission'); // This prevents your page from refreshing!
    const results = await fetch ('/api/foodServicesPG'); // This accesses some data from our API
    const arrayFromJson = await results.json(); // This change it into data we can use 
    console.table(arrayFromJson.data); // This is called "dot notation"
    // arrayFromJson.data - we're accessing a key called 'data' on the returned object
    // it contains all 1,00 records we need
  });
}
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); 
// The async keyword means we can make API request
