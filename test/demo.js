/**
 * Created by Administrator on 2018/7/11.
 */
function get () {
  return "hello"
}

async function testAsync () {
  return Promise.resolve("world")
}

async function test () {
  const v1 = await get();
  //const v2 = await testAsync();
  console.log(v1)
}

test()
