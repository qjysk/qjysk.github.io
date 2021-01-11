			
	var Qvalue ;
	var V2value ;
	var Hvalue;

	function QFunction() {
        var RRvalue ;
        var precipitation=document.getElementById("R").value;      
        var day=document.getElementById("D").value;   
            if(day >5) {
                RRvalue=precipitation-5*day;
            	if(RRvalue <=0) { RRvalue = 0.01*8.6*precipitation}       
            }
            if(day<=5 && day>0) {
                RRvalue=precipitation-4*day;
                if(RRvalue <=0) { RRvalue = 0.01*8.6*precipitation}
            }			
        Qvalue= 263400000/10000*RRvalue*0.001;
        Qvalue=Qvalue.toFixed(2);
        RRvalue=RRvalue.toFixed(2);
        document.getElementById("RR").innerHTML=RRvalue;
        document.getElementById("Q").innerHTML=Qvalue;
	}
	
	function HFunction() {
		var V1value=document.getElementById("V1").value;
		var VV2=Number(Qvalue)+Number(V1value);
                document.getElementById("V2").innerHTML=VV2;
                var V2value=Number(VV2)
                if(V2value>=504.2 && V2value<630) {
                        Hvalue=572.30+(V2value-504.2)/74
                }
                else if(V2value>=630 && V2value<795) {
                        Hvalue=574.00+(V2value-630)/82.5
                }
                else if(V2value>=795 && V2value<991) {
                        Hvalue=576.00+(V2value-795)/98
                }
                else if(V2value>=991 && V2value<1230) {
                        Hvalue=578.00+(V2value-991)/119.5
                }
                else if(V2value>=1230 && V2value<1521) {
                        Hvalue=580.00+(V2value-1230)/145.5
                }
                else if(V2value>=1521 && V2value<1872) {
                        Hvalue=582.00+(V2value-1521)/175.5
                }
                else if(V2value>=1872 && V2value<2275) {
                        Hvalue=584.00+(V2value-1872)/201.5
                }
                else if(V2value>=2275 && V2value<2900) {
                        Hvalue=586.00+(V2value-2275)/227.5
                }
                Hvalue=Hvalue.toFixed(2);
                document.getElementById("H").innerHTML=Hvalue;

	}	
