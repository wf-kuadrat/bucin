document.getElementById('buka').addEventListener("click", function(){
      this.style.display = "none";
      document.getElementById('form').style.display = "block";
})
document.getElementById('sub-form').addEventListener("submit", function(e){
      e.preventDefault();

      var nama = document.getElementById('nama').value;
      var jawaban = document.getElementById('jawaban').value;
      
      if(nama === "" || jawaban === ""){
            document.getElementById('hasil').textContent = "Kamu gak mau jawabn yah??";
            return;
      }
      if(jawaban === "suka"){
            document.getElementById('hasil').textContent = "Aku juga suka sama kamu " + nama;
      }else{
            document.getElementById('hasil').textContent = `Walaupun kamu tidak suka, aku tetap suka kamu ${nama}`;
      }

})
