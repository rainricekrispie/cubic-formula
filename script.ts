const form = document.getElementById("mainform") as HTMLFormElement;

form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const a: number = Number(formData.get("aname"));
    const b: number = Number(formData.get("bname"));
    const c: number = Number(formData.get("cname"));
    const d: number = Number(formData.get("dname"));
    const p: number = ((3 * a * c) - (b ** 2)) / (3 * (a ** 2));
    const q: number = ((27 * a * d) - (9 * a * b * c) + (2 * (b ** 3))) / (27 * (a ** 3));
    const discriminant: number = ((q / 2) ** 2) + ((p / 3) ** 3);
    let root1: number = 0;
    let root2: number = 0;
    let root3: number = 0;
    

    
    function cardanoMethod(p,q) {
        const u: number = Math.cbrt(((-q) / 2) + Math.sqrt(discriminant));
        const v: number = Math.cbrt(((-q) / 2) - Math.sqrt(discriminant));
        const x: number = (u + v) - (b / (3*a));
        return x;
    }
   
   
   
   
    if (discriminant < 0) {
        const theta: number = (1 / 3) * Math.acos(-q / (2 * Math.sqrt(-( (p / 3) ** 3) ) ) );
        root1 = Math.floor(1000 * (2 * Math.sqrt(-p / 3) * Math.cos(theta) - (b / (3 * a)))) / 1000;
        root2 = Math.floor(1000 * (2 * Math.sqrt(-p / 3) * Math.cos(theta + ((2 * Math.PI) / 3)) - (b / (3 * a)))) / 1000;
        root3 = Math.floor(1000 * (2 * Math.sqrt(-p / 3) * Math.cos(theta + ((4 * Math.PI) / 3)) - (b / (3 * a)))) / 1000;
        
    } else if (discriminant == 0) {
        if (p == 0 && q == 0) {
            root1 = cardanoMethod(p,q);
            root2 = cardanoMethod(p,q);
            root3 = cardanoMethod(p,q);
        } else {
            root1 = cardanoMethod(p,q);
            root2 = cardanoMethod(p,q);
            root3 = Math.cbrt(q / 2) - (b / (3*a));
        }
    
    } else if (discriminant > 0) {
       root1 = cardanoMethod(p,q);
    
    } else {
        alert("Calculation failed, please refresh the website.")
    }
    
    console.log(p);
    console.log(q);
    console.log(discriminant);
    console.log(root1);
    console.log(root2);
    console.log(root3);


})
