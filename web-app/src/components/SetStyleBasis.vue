<script>
export default {
  name: "SetStyleBasis",
  data() {
    function setBasis() {
      var widthofClient = document.body.clientWidth;
      var filterElements = document.getElementsByClassName("filter");
      var widestElement = 0;

      for (let element of filterElements) {
        if (element.clientWidth > widestElement) {
          widestElement = element.clientWidth;
        }
      }
      let flexBasis = Math.floor((widthofClient * 0.8) / (widestElement+20));

      var newFlexBasis = 100 / flexBasis;
      for (let element of filterElements) {
        element.style.flexBasis = newFlexBasis + "%";
      }
    }
    setBasis();

    window.addEventListener('resize', function() {
        var filterElements = document.getElementsByClassName("filter");
        for (let element of filterElements) {
        element.style.flexBasis = 'unset';
      }
        setBasis();}
        );
}
}
</script>