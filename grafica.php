<?php
$seg = $_POST['seg'];
$usuarios = $_POST['usuarios'];
//echo "[".$users."]";
// echo "[".$seg."]";
?>
<script src='https://cdn.jsdelivr.net/npm/chart.js'></script>
<script>
  
    // Bar chart
    //
    var ctx = document.getElementById('chart2');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [<?php echo $usuarios; ?>],
        datasets: [{
          label: '# de Seguidores',
          data: [<?php echo $seg; ?>],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    </script>
    <div id='chart'>
    <canvas id='chart2' width='800' height='450'>**</canvas>
    </div>

    
