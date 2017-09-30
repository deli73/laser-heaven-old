#pragma strict

var moveSpeed : float;

function Start () {
	
}

function Update () {
    var dx = Input.GetAxis("Horizontal") * Time.deltaTime * moveSpeed;
    var dy = Input.GetAxis("Vertical") * Time.deltaTime * moveSpeed;

    transform.Translate(dx,dy,0);
}
