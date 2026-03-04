const form = document.getElementById("mainform") as HTMLFormElement;

form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const a: number = Number(formData.get("aname"));
    const b: number = Number(formData.get("bname"));
    const c: number = Number(formData.get("cname"));
    const d: number = Number(formData.get("dname"));
    
    const p: number = (3 * a * c) - (b ^ 2) / (3 * (a ^ 2));
    const q: number = (27* a * d) - (9 * a * b * c) + (2 * (b ^ 3)) / (27 * (a ^ 3));
    
    const discriminant: number = (q / 2) ^ 2 + (p / 3) ^ 3;
    const u: number = Math.cbrt((-q / 2) + Math.sqrt(discriminant));
    const v: number = Math.cbrt((-q / 2) - Math.sqrt(discriminant));
    
    const root1: number = u + v - (b / (3 * a ));
    
    console.log(p);
    console.log(q);
    console.log(discriminant);
    console.log(root1);

})