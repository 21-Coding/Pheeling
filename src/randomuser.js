export class Strain {
  async getProfile(nameOfStrain) {
    try {
      let response = await fetch(`https://strainapi.evanbusse.com/Pi2XNoO/strains/search/name/${nameOfStrain}`);
      // let response = await fetch(`strainapi.evanbusse.com/API_KEY/strains/data/effects/STRAIN_ID`);
      console.log(response);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }

}
