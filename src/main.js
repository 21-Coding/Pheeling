import { Strain } from './../src/randomuser.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';



$(document).ready(function() {
  $('#detail-button').click(function() {

    const strainName = $("#nameOfStrain").val();


    (async () => {
      let getDetails = new Strain();
      const detail = await getDetails.getProfile(strainName);
      getElements(detail);
    })();

    function getElements(detail) {
      console.log(detail);
      $('.info').text(`Detail: ${detail[0].desc}`);
      $('.type').text(`Type: ${detail[0].race}`);
      
    }
  });
});
