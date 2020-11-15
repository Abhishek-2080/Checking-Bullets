function hasCollided(object1,object2){
    object1RightEdge=object1.x+object1.width;
    object2.LeftEdge=object2.x;
    if(object1.RightEdge>= wall.LeftEdge){
    return true;
    }
    return false;
    wall.width=thickness;
    }

    function hasCollided(object1,object2){
        if ((object1.x-object2.x)<=((object2.width/2)+(object1.width/2))
        && (object2.x-object1.x)<=((object2.width/2)+(object1.width/2))
        && (object1.y-object2.y)<=((object2.width/2)+(object1.width/2))
        && (object2.y-object1.y)<=((object2.width/2)+(object1.width/2))
        ){
        
        }
      
      }