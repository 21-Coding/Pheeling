export class Strain {
  async getProfile() {
    try {
      let response = await fetch(`strainapi.evanbusse.com/Pi2XNoO/strains/search/name/${nameOfStrain}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
