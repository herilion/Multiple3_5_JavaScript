function multiple_3_5(n) {
    let somme = 0
    for (i = 0; i <= n; i++) {
        if ((i % 5 == 0) || (i % 3 == 0)) {
            somme = somme + i;
        }
    }
    return somme;
}
//appelle de la fonction
multiple_3_5(10);