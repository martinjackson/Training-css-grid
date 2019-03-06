function printNames(...names) {
  console.log(`number of arguments: ${names.length}`);
  for (var name of names) {
    console.log(name);
  }
}

printNames('foo', 'bar', 'baz');