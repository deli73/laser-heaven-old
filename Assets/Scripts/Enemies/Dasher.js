#pragma strict
//woosh

var targetPos : Vector3;
var pauseLength : Number; //time in seconds between spawning and dashing at player
var player : Transform;
var speed : Number;
private var startPos : Vector3;
private var startRot : Quaternion;
private var target : Transform;
private var distance : Vector3;
private var perSec : Vector3;
private var timeLeft : Number;
private var isDashing = false;
private var angleOffset = -45;

function Start () {
    startPos = transform.position;
    startRot = transform.rotation;
    target = transform; //
    distance = targetPos - transform.position;
    perSec = distance / pauseLength;
    timeLeft = pauseLength;
}

function Update () {
    if(isDashing === false){
        timeLeft -= Time.deltaTime;
        transform.position = startPos + perSec * (pauseLength - timeLeft);
        target.right = player.position - transform.position; // attempt to point at player
        target.rotation.eulerAngles += Vector3(0,0,angleOffset); // compensate for sprite rotation
        var targetRot = target.rotation; 
        transform.rotation = Quaternion.Slerp(startRot, targetRot, (pauseLength - timeLeft)/pauseLength); // actually point at player
        if (timeLeft <= 0) {isDashing = true;}
    }
/*    else{
        transform.rotation.eulerAngles -= Vector3(0,0,angleOffset);
        var rot = transform.right;
        transform.Translate(rot * speed * Time.deltaTime);
        transform.rotation.eulerAngles += Vector3(0,0,angleOffset);
    }*/
}
