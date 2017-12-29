**transform-to-callbacked**

# About
Transform sync function to async function with callback.

# Get started
```
import {transformToCallbacked} from "transform-to-callbacked";

const callbackedSum = transformToCallbacked((a, b)=>a+b);
callbackedSum(3,4,(err, res)=>console.log(res)); // 7
```

# Run & Test
`npm run build` - для создания сброки, которая потом может быть экспортирована

`npm run __tests__-m` или `npm run __tests__-m:devtool` для возможности дебага в chrome devtool (сразу запускает хром-девтул)

`npm run bench-c` или `npm run bench-d` - запуск тестов производительности для вариантов функций

