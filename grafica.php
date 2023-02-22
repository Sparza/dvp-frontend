<?php
//echo "hello";
$u_login = $_POST['u_login'];
$seg = $_POST['seg'];
//echo "[".$seg."]";
//$seg = "11,10,14,28,7,3,0,0,0,0,28,14,11,3,10,7,0,0,0,0";

function getdata($url,$param){
    $url =$url.$param;
    $context = stream_context_create(
        array(  "http" => array(
                "header" => "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
                )
             )
    );
    $json = file_get_contents($url,false,$context);
    $u_login = json_decode($json,true);
    return $u_login;
}

$u_login=getdata('https://api.github.com/search/users?q=',$u_login);

echo "<br><br>";
$usuarios="";
//$seg="";
$num=10;

$coma="";
for($i=0;$i<=($num-1);$i++){ //  10 usuarios
  //sleep(1);
  $u=$u_login['items'][$i]['login'];
  $usuarios.= $coma."'".$u."'";
  $coma=",";
  //$url2="https://api.github.com/users/";
  //$u2=getdata($url2,$u);
  //$seguidores[]=$u2['followers'];
}
//$seguidores=[20,23,66,5,300,250,23,66,50,100];

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
