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

// na$('.name').text(`Strain Name: ${detail[0].name}`);
      $('.name').text(`Strain Name: ${detail[0].name}`);
      $('.name1').text(`Strain Name: ${detail[1].name}`);
      $('.name2').text(`Strain Name: ${detail[2].name}`);
      $('.name3').text(`Strain Name: ${detail[3].name}`);
      $('.name4').text(`Strain Name: ${detail[4].name}`);
      $('.name5').text(`Strain Name: ${detail[5].name}`);
      $('.name6').text(`Strain Name: ${detail[6].name}`);



// descriptions
      $('.info').text(`Description: ${detail[0].desc}`);
      $('.info1').text(`Description: ${detail[1].desc}`);
      $('.info2').text(`Description: ${detail[2].desc}`);
      $('.info3').text(`Description: ${detail[3].desc}`);
      $('.info4').text(`Description: ${detail[4].desc}`);
      $('.info5').text(`Description: ${detail[5].desc}`);
      $('.info6').text(`Description: ${detail[6].desc}`);
// types
      $('.type').text(`Type:  ${detail[0].race}`);
      $('.type1').text(`Type:  ${detail[1].race}`);
      $('.type2').text(`Type:  ${detail[2].race}`);
      $('.type3').text(`Type:  ${detail[3].race}`);
      $('.type4').text(`Type:  ${detail[4].race}`);
      $('.type5').text(`Type:  ${detail[5].race}`);
      $('.type6').text(`Type:  ${detail[6].race}`);

    }
  });
});


// $('.info').text(`Detail: ${detail[0].desc}, ${detail[1].desc}, ${detail[2].desc}, ${detail[3].desc}, ${detail[4].desc}, ${detail[5].desc}, ${detail[6].desc}, ${detail[7].desc}`);
// $('.type').text(`Type: ${detail[0].race}, ${detail[1].race}, ${detail[2].race}, ${detail[3].race}, ${detail[4].race}, ${detail[5].race}, ${detail[6].race}, ${detail[7].race}`);
