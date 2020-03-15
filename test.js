function demo(a) {
  if (a >= 0) {
    a = a - 0.5;
    demo(a);
    console.log(a);
  }
}

demo(1);
