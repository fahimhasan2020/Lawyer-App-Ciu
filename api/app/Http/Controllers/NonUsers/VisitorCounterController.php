<?php

namespace App\Http\Controllers\NonUsers;

use App\Http\Controllers\Controller;
use App\Model\VisitorCounter;
use Illuminate\Http\Request;
use GeoIP;
use Carbon\Carbon;

class VisitorCounterController extends Controller
{
    public function visit(Request $request){
        if ($request->type === 'visitor'){
            $geoip = $_SERVER['REMOTE_ADDR'];
            $this->generalVisitor($geoip,$request->title);
        }elseif ($request->type === 'register'){
            $this->loggedIn($request->ip);
        }else{
            $this->subscribed($request->ip);
        }
    }

    private function generalVisitor($ip,$title){
        $dataGet = VisitorCounter::where('ip',$ip)
            ->whereDate('created_at',Carbon::today())
            ->count();
        if ($dataGet > 0){
            return 'visitor';
        }
        $address = GeoIP::getLocation($ip);
        $result = VisitorCounter::create([
            'ip'=>$ip,
            'lat'=>$address->lat,
            'lng'=>$address->lon,
            'type'=>'visitor',
            'page_title'=>$title,
            'country_code'=>$address->iso_code
        ]);
        return $result;
    }

    private function loggedIn($ip){

    }

    private function subscribed($ip){

    }

    public function pushMessage()
    {
        $token="diRpASrLRGqLhLcjda-HPC:APA91bFxY5h4em6eC_3Y2velkX6_nJGrtrP2u8LK8npx4PJz_2ZC8ajmIzTa4dxSeWiSef6qVb-V8ff9zW4qkZgy9B4DR_LeTBAvRxEUgw-GJkFOc6Pe64ToznqkQQ0CbCGDAn5gI35N";  
        $from="AAAASNd2OOo:APA91bHgu8i8RkUSUIiWw9aazobXSaFfn34CEmZGGgKf_DMHctGMXg70RqaifLYEX6XdMvMg70Ny2tgHp0gUh7fRy0bIQmcwIkZOBf0UzDP3ZtIGzpwmQbzIJCppVyAsHLEcHnl1KtJ4";
        $msg = array
              (
            'android_channel_id'=>"558967",
            'title'=>"Welcome to shusastho", 
            'body'=> "I love you",
              );

        $fields = array
                (
                    'to'        => $token,
                    'notification'  => $msg
                );

        $headers = array
                (
                    'Authorization: key=' . $from,
                    'Content-Type: application/json'
                );
        $ch = curl_init();
        curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
        curl_setopt( $ch,CURLOPT_POST, true );
        curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
        curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
        curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
        curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
        $result = curl_exec($ch );
        dd($result);
        curl_close( $ch );
    }
}
