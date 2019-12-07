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

// name
      $('.name').text(`Strain Name: ${detail.positive}`);
      $('.name1').text(`Strain Name: ${detail[1].positive}`);
      $('.name2').text(`Strain Name: ${detail[2].positive}`);
      $('.name3').text(`Strain Name: ${detail[3].positive}`);
      $('.name4').text(`Strain Name: ${detail[4].positive}`);
      $('.name5').text(`Strain Name: ${detail[5].positive}`);
      $('.name6').text(`Strain Name: ${detail[6].positive}`);



// descriptions
      $('.info').text(`Description: ${detail.negative}`);
      $('.info1').text(`Description: ${detail[1].negative}`);
      $('.info2').text(`Description: ${detail[2].negative}`);
      $('.info3').text(`Description: ${detail[3].negative}`);
      $('.info4').text(`Description: ${detail[4].negative}`);
      $('.info5').text(`Description: ${detail[5].negative}`);
      $('.info6').text(`Description: ${detail[6].negative}`);
// types
      $('.type').text(`Type:  ${detail.medical}`);
      $('.type1').text(`Type:  ${detail[1].medical}`);
      $('.type2').text(`Type:  ${detail[2].medical}`);
      $('.type3').text(`Type:  ${detail[3].medical}`);
      $('.type4').text(`Type:  ${detail[4].medical}`);
      $('.type5').text(`Type:  ${detail[5].medical}`);
      $('.type6').text(`Type:  ${detail[6].medical}`);

    }
  });
});


// $('.info').text(`Detail: ${detail[0].desc}, ${detail[1].desc}, ${detail[2].desc}, ${detail[3].desc}, ${detail[4].desc}, ${detail[5].desc}, ${detail[6].desc}, ${detail[7].desc}`);
// $('.type').text(`Type: ${detail[0].race}, ${detail[1].race}, ${detail[2].race}, ${detail[3].race}, ${detail[4].race}, ${detail[5].race}, ${detail[6].race}, ${detail[7].race}`);
