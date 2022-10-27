
    $("#gerar").click(function () {
      var conteudo = $("#link").val();
      var GoogleCharts =
        "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=";
      var imagemQRCode = GoogleCharts + conteudo;
      $("#qr").attr("src", imagemQRCode);
      $("#qr").show();
      $("#download").show();
    });

    $("#baixar").click(function () {
      var conteudo = $("#link").val();
      var GoogleCharts =
        "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=";
      var imagemQRCode = GoogleCharts + conteudo;
      window.open(imagemQRCode, "_blank");
    });

    $("#link").keypress(function (e) {
      if (e.which == 13) {
        $("#gerar").click();
      }
    });



    $(document).ready(function () {
      $("a").on("click", function (event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top,
            },
            800,
            function () {
              window.location.hash = hash;
            }
          );
        }
      });
    });
