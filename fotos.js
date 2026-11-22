var RUTA = "https://cdn.remax.com.ve/api/novus/inmuebles_usados/";
var PREFIJO = "P_0_";

var FOTOS = {
    "329955": ["564f15f83f4d8b2c9b201c28bf69bbd9", "cea16dcd887e3d100b60c8bbb743fe1d", "f9bf9aa99dca62c1f313eb9c07d2479e", "cf4216be5fce0754dff638e7972c852d"],
    "315766": ["8f9f83da14b2116cbb6a0bde2e6f75", "2841ba2bf65e511735d5a35f0faf1b", "e522d0f12d8715d82ae23235a577be", "31e614675b0e9311af9c33aca62a46", "3107e8605c1ebe9b88dd2ae0b150be", "49ac641d77d023f3fc5af7decba676", "2b98fc0e50154aab55707b41b7e8c9", "3dae659f729d10abe56c0bf4e888f5", "09164ce87966655f31d58226f9150b"],
    "329025": ["773a7c0180028ab3dbd113bd8792c2cf", "c6a35e9501c516762af7369268120e5b", "6a037c7292fd7f1e1fe78cca1232c219", "8b1372dbee1e523cd4b7169d6babf105", "19d1fee6f32912e5ec98e24c9f8653ed", "0a1ecdea4e13ee23e24f8e90c70d0a4f"],
    "328865": ["f94a0be12aad5372f672fd17aa39b6d3", "6ac3b789586132bc1c7cbddb16152b33", "f24e5671e3b3d2faec1ea5f78619ec55"],
    "327250": ["1686eed0e6960c49d8339fe7419354", "ce549e77bcd8041520e7d73df58e66", "5ab886012c26e08e67aaaf6b4e8d93", "93cf7e6e56964010fcc3ae94983e8d", "d3c2e3f7fe8897ca37c126e5713c8c"],
    "330915": ["ce0a91c87e3a087613a917bb35a77f42", "b7186fc2799af193c3fc46986b3adfbf", "cd2532ddea2a8ffbba6f7f8934c827dd", "4024cf5a6ab897bdf51808b814f4f2aa", "cac95816f2dc08361304c391cb85501e", "5c7d5105a83a8a72deaaefaa09ecd780", "de86fbe5172fb71275555fb1ad643aaa", "bbe8c9ba2e4436919074c673a52dc188"],
    "328889": ["fb3fad7e348b94f1e67a09014bc00fcf", "213abab9d724226a45cb03cc6670b27d", "cae582824a7897bb43fde4f9ad6681b8", "3eea2bf40131538ff5413b95d184ebd8", "95de065d5703db137a8ce53c480aeb9c", "48720651c65a4ef1281d8a23731868d3", "0702a64561ab8dd6cc65538c7a8acb48", "3dae286643e43ab20406c052cc6ada92", "d66315d8331c938bd6efbabd0ed82317"],
    "332252": ["894be34fc0ee7307dc6a56eb0edd2626", "b64c4d213237fa85de97f385ad6ee131", "4488f9869c46864741d00d960ae612d6", "7bfb7f82bd802d3cebd0549912ddce79", "43d464d379abb81480823eb802d212ee", "8c882841904860daa42c97d4414242da", "00dc72661245470d971bcc3b13d7986a", "b5793d81a5415e066d2827a258a23494", "aff4adff4bcc31e6388f053740d358e6", "a1066f056af491756c6bf9ade2cf9c14", "df3e9a47f604fe9b6a6ab61e18c14446"],
    "332621": ["0a4b143c10dbf2fcd85d7c85e8b5e17a", "b299eb94178626cf7d167bb8c026c0e0", "d6f57ba88a9d28fedfe225b14e2b46b9", "c7a2fcc68967add880176815653f5980", "b4755e75bcdd864c125e3492b525bc10", "e4e1713440ddfe30c2ddef9ff74db5d8"],
    "332698": ["4c0818d5e67c96675c6d91478357774c", "90ca8cf44c06ed799afaa199133efd20", "fcb8c93484b284cf23531fac5bf22635", "437a2be02b819d9e5bf5a156dff99e04", "103a7fca6f298a97d806235019eab692", "bdccfab4f0201473a03e00d580fdcf45"],
    "333336": ["ff17c8cba3d1818023abc62a233ac7c6", "9d6847082bad8de3e74de10946a15d88", "46896446be9222e78746b61acf6f883a", "0de77c2c67f42ca6f5804e5ff6a57f2e", "2b3cd7c02137e974d5c62fd3b2b9114e", "7efa84ac74da7ed97df04ada00e34946", "83dc1da1c8a765728a3fc6bd15b74997"],
    "333193": ["bd79652bcf6580fd269833dcd7ee7eed", "6524c563f90ca7274a8bc1099ca9adb0", "f2dfb8c31f9b3ff7606e66347994bf99", "57eb3187a7ecaae8c6590543875b3320", "07c0ccd77218c4437158f6f1f401edbe", "4f94c4ed7ad4a0595832463142e97e87", "dcb0d782a5ea35b1ff0505e0fb317b5b", "5ad53deadd314455348f1202470d1ca9"],
    "332672": ["d2857edd7a6cf0e0739eec15014cf138", "254e07ac68f84469ff8ab0c960be3d81", "bca4bd65320f6f28946d151758015f3a", "ef3d7d3217b620159763884ad8a3a345", "76549dfdc6bb985304d0bedefbf44b57", "6cd0e1ac7336464bdb2b90f3214c800e", "5889a32ce7ea18f37a7861d0ba6bf6e0", "c83b1d6484fd916a812076902d2f18ed", "3286bae8e694b531177813e7b7f3343a", "0355cab94f6d96b54ea66bd25357159d", "f6f9efbc98da9499b8114ffcd2d0f521"],
    "332676": ["f27bb385cbbf802fb7beb59e04002876", "1e2d14b69f102648ba59d1ef672abb7b", "d4eb3871f1acab449af5e3662ec443c2", "244af82329fb175b336b0a5b6cb2880c", "b79d1abee5d25d43f4ced6cdd2dbd267", "4f9523d8331bd11f1470cc64237d20a9"],
    "333251": ["8ff39c1a05fa0ebf56d7eaaecf609520", "db1d79283923011f2fff37b3ad648fdd", "63d77eabbe67683467af3cc117434f32"],
    "332693": ["da4f8d50efec3526bba073ab9ff7a617", "c3bd5ff11eb34dca0c655368e59b5878", "9265f07355a55edb7463a78b228780ff", "00c402c8e9516fbc1162781b8a24ab8c", "33c58023620590a385a397cf741e1677", "182dbd47243b3f6088370ecffc09ffbf", "c11e1f086a4032e75b1e22f19de02482", "2f067ed94ef7632bbcf24249b9ad78f6"],
    "332699": ["9f09cee1da5050f9cc91b0d2871d31c8", "431b5c933d451b443af496c222dd0823", "bd488fabb3f2d046042c54d2e13db3bf", "4bfff82f04206ee7e0c6b98785247be0", "0_45b99a4ae28e9d633d13949df8633cb6", "c6e9917887c4c47c1307fd61e2c3ce0c"],
    "333325": ["690c218342c9bbb7ddb15bd7c855fd2f", "905bfab17a504aae6fcfd5cc1a1f93a2", "6dae8f001d787a53108173051f5bfa3b", "6ee7ee82a329d94ee7a7b08fb54bb210", "8b9d6f2420abe92749834b317af6c910", "eb1fbe0ef646c3c9e75e45e7eceebc00", "4d36c0a3ddf84bd9a8a9129e555e01db", "844b2b3a89f7e709f0e788324ca6db92", "55a6247c1295aa74b3313a83788be4ce", "77e59c7b8fff186377daecaf69c8c8ba", "e9b7ddd174e02650870559fb4ef6330c", "e3724785995d47c85ba3a2d9399b7cb9", "e9f20ae172cf85b7b2182b2cfdfedfd8"],
    "332680": ["287cb2ed067044b94c745fc228e020c9", "cee53841a993f6275482e800f0b3b2b9", "39566f93bc47f9d378843c1493353b97", "6c1f334175b107ad649319471bc2a057", "7ad52969140f27aeee75572c3533821e", "143d077780e7f5a0d91fa91968bf2e96", "756f62456531d9d2a8a4cb4fb0be1121", "63621aacca6ab5a33e9d87ffa613b589"],
    "332740": ["1cb21624f5dfeedcd0975fbf3870412c", "cdcb70813433544d87dea0dbaef0b389", "563f04dc4991778fb6f8ba478036aa6b", "825f62991c7ed6c4aa55c57809e11f48", "a838124b6abe975780b8730ed3456ace", "41adce7195180d1f8d67a627365a418d", "10355ba3571f3cd81faa8acc1affd42b"],
    "333190": ["197c4bc6fec5cac572b99db2678bed4f", "cfce544a0242c7744aa5cf4ddb5e3416", "d4ce637289c9ef10be5de6442b1bd22f", "367bb8559f9e0007e023e2eaf6fd8f17", "9fc90c17b7cb476a106f81e67416042c", "8b5c040dd767a4a9904f40cd8168a232"],
    "333238": ["55cbc6faae1a269cd0a901b3f9d3e005", "9b7a2f4369014146f47d6dbdf169c926", "8b26d911d386a0a36542e9dad42b527b", "a1fd2024a9838a477b8653c5abfb7cc2", "b396c9e4f42ea8c1fa9118b2ebfa2c28", "4816299f38714b2571be7940214e28c2"],
    "332689": ["222576865493e19db7fc6d304b05bffe", "a38669822a6b45c64fab218babe8e2c7", "865751cef86487a9d164cb1e9fdbbf96", "2128f46d8ef48d65df18d3b255017d0f", "3a91335d6b6bbe157faeb3180af8a4a5", "03397ae9461b1c7b2263907adfa30130", "fdca8bf9e03f67e547a6f1c7343cf47a"],
    "332751": ["2e30cbbe3f09661a9e2ee25237db7b27", "b7e2a73d7aad968353668074487f164d", "5f42f4c3a755c71645193bfa4a12cc8f", "a9665c99cc84a9aaba7b6b581db0834c", "ae1a8800bc18e33d34e92f725cd438af", "496c6218efb25d3a6a464cb0e691f677", "00a11033a061854323bd7b64c81846eb", "919299327f863b320b874078ab528db3", "433c4174d4bbf6c87c6c9d77e1fef651", "59a176720978d9fd05476405bacfff37", "bc7988fe7ede6066fb3980105a52bacd", "d87159f0aa60039a44d406bc15e69a32", "0b53d6db3e03b51ebbe9bf9054265239", "8f807eac510a1f6817dae79893a58252", "00879c268e9051d7a02bbf6fdfbe7009", "db0450a6dda574768d5fce5378b82748"],
    "332758": ["922d3e90b3e0e485070d2d168db36617", "a92ea2c62818899f6673f2fc7075d15e", "d259dd0b9698bf78d54c29c73cdce2ec", "9e69f77af4a6c2bb028c9607403ba340", "250d44f48c7a5b7c76e8059cfd356ef4", "fb14ff911b354f97743bf4a27b3641fe", "7fa8a50c9898e8c1c4cf4444283371c7", "37ad8359480c298b15a8171f0917668f"],
    "332737": ["0_0628b8b65e54663dff61122443acc0ec", "ab152df6642a1480cc9fb45a837424b1", "0450b649c55b9565edb588401a6d79ff"],
    "333353": ["c25d70aebb811ad99f205732c04f4989", "d9f7a0625e060c7ce707628695d8f4b9", "002565e6bda19d3011065f5fb9456971", "0e31c4633b5f26e7547ae788a20289cf", "56359ecf438fe8a73c144329d4e0b360", "333125e9cb0e45c28c5526a5b9a8a386", "6060a31512ded4f2ec0171ad8150b4b8"],
    "332697": ["0_78d16add725179a7048e9c277c159194", "0_5e1b1c315d3c3ee490c3c1b394b3b31a", "a306ad96c909d45c8e53918e9d9b8d58", "9e9f0025a6094dd02a2aa07b5eb50335"],
    "349182": ["5089be56120e445d19f2897b2de12489", "eab3b8819dfe1fde8980c0e37e3e8114", "2d02ba5cb628ae112c7dc511ba00ab2f", "8d8257b4d3e54ba5b1242dfe35088174", "b14e564fe854185b8d718e867d7f7e18", "63ac002bcf6bd2c5968bd0fe0a367c10"],
    "349424": ["83354554b33f5d07fa31f29b58db26b0", "b59a0e44ba617411da917664e7adc2f0", "0_1ed693922f774cae8d0d74369c2705ad", "0_4e9de10c11d5ecfc24b441e498b76d99", "0_37f94022b3f2228102928b1a8fbc93c6", "79447f08f697792e5f73105d18c13b44"],
    "349419": ["b398d7e667f4ec63bef56bb960d5eaf3", "430ba5ca90d503f05984477c0ee9c23a", "6fca90a3cab0f28631c934b72e2b5c23", "e94164120ad95096eeac24409e8989db", "0_1447f1802ce1e8a7f82e0f62852c2080", "23da27bd77323eed45f2b525c149b124"],
    "351145": ["59faea01cb00838d3410513240a381d1", "9d733cf2e517ae50e0c8dafd6c5f4b6b", "ef5da78c89aac39cce329c9938d65725", "6f0606625e736f43c36b548cdc9da106", "b2245bf2c91a0a30add552ad493946a6", "76e6c21f54d992e8aae49cf393448e6d"],
    "349190": ["3deafed5a064f14118eaed9f0c6b8564", "7f0cfb7cea7ec7423ba969f4f7b37afc", "29ac8808087af56321f7ffb6e2cce3b0", "5858f6c34ca1f227d6ed8cfc494899ca", "5bfb4e1900102511765481a13e8a8a33", "a9fa3b89bb1b8b272ade7534cd4a497c", "09ffa618c017e4420b09d0a840baff36"],
    "350710": ["1383ac7003cbc484910315b961e0935a", "41527d7c6159bacd7642621a0216c278", "9cff327c9c6ace73aafeb1944cef2703", "0fa00b6373d7e156df77ce9d92a8d590", "1170e262635683a7ffe3414797537cbf", "e3149198578f1ed7d6de5c912d33454f", "e2cbceb753f05a888ce6319ca50c1f74", "64490c0f64c406bf185f46b32cb14581", "9d3bd78188868880ddf8eb5439b3b122", "ef5d73f1fa91ce11b57214769ae031b9", "d123805bf3bc55709a975a0011ac7e3f"],
    "351143": ["a3fd4033b4fb68c4cd787434e8ecd941", "bee33950419ba25f0b26101642cae4fa", "436ae29410b9143f665ceccbd9087673", "f7e01e022a311a47e108a20b0e7f6414", "b43447175273d97f719f665259a59a36"],
    "339310": ["0_a7b944770a804a6a973950658287cb51"],
    "339306": ["892f1cc3374626ab20d7d05c6e9b7c86", "db17a2b9835acd1782aaee2af0a4caf2", "c660be373c2855b559dec5888e3d022f", "a33cbd5ae7d37c98639585c162629ab1", "82c084f50422910f007e2fb3ac79c983", "510996344a40cabc54ffcde9a23c9ff4", "7ae4ba8adbd969dce95b86ec477397bb"],
    "337412": ["d690d34f3adc26edc50be4c05dffd322", "2017cbd7c69bd29985d4e23fdface5d1", "a95785d99ad65a99641df6ce663f67b5", "ad20fa0169a4fce0d1c36344cdb30793", "8df085fd69a59c4602ab2f60eb087c70", "af780e501867bf03a9f663ae5f9f6ed5"],
    "338442": ["8454664c8f6673364a84b03020302ccb", "c84dddb68d9182d8b1a1a9b507ff524a", "fa212ecf2494702ced2077a062ec3fa5", "8b62457d5b527f5390aa0dd03f044cee", "b931d1c94bfc39dca519cf4aadb18448", "184e9a5e94bbe9f8e36a97c0f0bfb222", "68e294c6dd38316caedf3e8142c53461", "70e97b145b8fbc18c25391c276985ab8", "579c8d87675fde8b32496aa9972ba8c2", "3252ecc4a9ee32db904fcd056e614e16"],
    "341305": ["3244044a132094959f928fab95769211", "ffd3cb280aaea464aadfc0b4c3c0f923", "c144359da0719e7511dff3935ba3f14e"],
    "335855": ["78072d30314d9308b5c190dc4d73309a", "43fb94d0969c7d1cd15a4f951f95cd13", "e5ad1edeba364410cb5bbfb3e133dfa6", "73f33ca66a6fe258be80fba1acd3f8aa", "16a978e3a1746675441decd373cb034c", "2feddd714368767be9bf15b1631a20a0"],
    "336032": ["abd15c9de900d186d192756305fa9f40", "3e3cfd26d1e72de153ac5966221cc6cd", "ab31c75fc0801c1279de0df36489543b", "3cd8c45fe58f516866496b675be60b6e", "b8bf925ff5b51a0a52a946cdcb8c2188", "fc395a8f4584f7cf0b9181d58dff9c82", "ea24ef744ca0b329b4d4a64a035f4f9d", "46cbf334c62e47dadaed922e148c4bea", "ac6bc96685c58c932a73a236fda07b68"],
    "337464": ["d3e3fa644ede76928b6306ed4086428f", "424b24f968b60a114a1f0cabefdbab57", "72c97f180b43315e9bbe70fedf6f4b8a", "c9e1a0695e4526014af31bc1e9ae5920", "a7619370a7520347a108f3daf1ddb373", "b857bc32c38b74b00cb4a94af0d96806", "81b8371f49864588148fac4c5f5c9722", "21c72796381ebb1a9005c97b7bd192de", "9daab2857eccffd79f729c143e262f50", "e20bf515f4ca5a983e3f0e5fe5829069", "7c0dc547a96c278ae0f7e30db471806e", "74707c5962a12689af1a85887d3f7dce"],
    "333703": ["865f82aad47fca75bb1cc9be83b5558b", "09c992d97b81a04dbacb91a7ff4ffd6c", "4722b69b074464ed8b16dfb2fe431c45", "08edffe5478e2b5f26ddbe12fe7f1a97"],
    "339502": ["95a8518bbc4117949a862298bbeeb55d", "08523b3577ba76aa9e64133b07466f9b", "af602609668868b12e92c92a7b1d0267", "a26841d5910517ef021fb9fb967e988f", "27b75ec88c64ae6e2fdab1b07488629d", "37f64ab5d20d152f645b30442b2c95ba", "842326660c5bc95b75a377c96ec379d5", "0f51217c257f02a0e518a2253d890f04"],
    "339898": ["5a0388800cfe22c5c51962df8845a8e2", "05f33178c2eac6914919648d41d47bfd", "91ab05fafe4577bc46ecd89eb1862a03", "5cc06601e47f07d7fd3fae4d557abfdf", "840eeb2db69b9a972c9a14b508fa63e4", "67478cf9c42aa433f0b54c68452273e7"],
    "341324": ["32cfc8a29500bf9413fffff2f9dbee62", "70dc1c914e62f9657ad5ca2721a76687", "3afe4a92a48b0742fe1a63e1e9791dcd"],
    "341325": ["8404ea4e0b8b2f20e10b776d4d6269a4", "045a61b49bd0419ec6b7d04695f21463", "5afe5eb54c14a500107b93fb074996fd"],
    "333426": ["1d8aeb6e83e9b5b958c1321d95ef058a", "d527f0a5e064811a96e1a756b6278a09", "7ce8220b4cc43bd7a6d456fe58e2cf07", "cfacaa8b1385406f450a545d4f6e2e67", "a84599653be2ce9d52c343140b6808a3", "3115ceb63f32bc975e52932b5989db87", "71867e83833520a1d0a0a971ebf11438"],
    "333427": ["2d40a1b3d2b1ac60181879adf6012412", "50e4a4b6a6f0e0cfc4e705c3ca101197", "eee9360d389e513f3c76775544a6f170", "ccab0ff3860d44f9a86dc2bd8d2474fe", "3343e960ecc3bcbaee84451636e45ec8", "aced11d5b91c728b054855153795c4bc", "3151e45bbaa583c88ebd673b8e12abf6"],
    "339313": ["1936338b84b99eaa62cfa686ea163e69", "2bc47f112fbb30561d6db6ef31739461", "a01e20a7d4fd47a52265ff0082696931", "d1ebc72a8fa021c9e904710ed38eb5ac", "e732a9f2473e8fd6cbe5bd5add1ea1e7", "376fd58f2e52e5060adc6a96df7202ba"],
    "336730": ["9bb7d48846676cea3d7ddcda37b62768", "3a99e451904efc356832fc2289021ee1", "a414d23f2f6f80b2be59f5109816df52", "d70e39c60537aa383f67c864e67009db", "b77cb701b94039827d2f733fedc65ce7", "9f8548eb61706fda36011c0698bffac2", "5bc5bd3d2440bde5cf66207a479bcd44"],
    "342511": ["869301f1c99cfa7eab3da76c82345f4c", "d5f3b868ab1d461f6e5cbe9c474c6f70", "16396d0d04ba6b390c50d58a2d875216", "91c8b0e39903611b374afac45993748d"],
    "342824": ["b279a9b45e73f553ea5bb8c61b40052f", "e093bd18b561e208e5807cca9e250ca1", "e4b29370ebac3f0cf5fbd0042ceacfe4", "046fb3854fb04899e1c9b06ce89bf12f", "7c002e4c07bcb668d94ff394172d3d57"],
    "342825": ["e838ac137eb2d3c63df7985537ffca2e", "c9a5db6dd3695cf2a9a69fc180b21f08", "00a605cd9d1648f178d227069b3486d8", "a9599ac6f3ab7534770771fe827734b8", "03bb1ce63f39cf053ae39a2ba2a2e65d", "0c319c1b53c166ac9a37170cd2018812"],
    "344384": ["a20acdd60a912172755611566a9af9fe", "206d2d0aea6945449e32e8c7162e1971", "d8a9a79ad05fc5881e73d5d815f9bea0", "cbc05d917a07aa7f3b447248c26e2013", "79935f1fe1cca58be4257f041d301590", "90fd0fc9ffea171fa57fc4b90a470abb", "a42a152ffb1c2f0a6f23538902e8e848", "205b2f28988b111e47991b2b964ce8f0"],
    "345837": ["ba8d13558ac05fd4996538ca37fe4f71", "fbaef7ab947aa8e82cec83353bf12f8d", "12a9c0c99d11e9ac47bf6d064273e3b9", "b91d00eabcfad778046e6464018ef393", "09f89ad13545525240fef09ded0d3b00", "750aeb4eb2c2506efa50101589ced623", "308d02b2d1c45c5a72b5b78098cb00c8"],
    "342521": ["ffd58e5845d28e2577397fd5b48c6247", "0b5ed9e438f9dd291067e45f4d7880e6", "9aad54963a9fb83decf361a3bb6b0fcb", "de8515311f0190aecf06ba296808c03a"],
    "348172": ["daf60434052058c1e82b1f7767c77f3f", "59157e71016a5dc38c0a80914ad84c49", "5d7d7e84a99acfc58210e5edcea10b15", "dd0437704c20f3af714c45e837f41b4c", "365ee47132b77a2a38fbbcf1bd1c7d2a", "8446e60b783a9ad0274c989902860fe5"],
    "348169": ["1d9df83902c72e4e6bc1729108a30abe", "1987fac076e3acce3c3a5d6721ccb4c5", "19eb66fea3c646029437131102e3ed3c", "3dd74fe9479d729530a690a66fa8dfeb", "c599f34c984892af8a37e1b40ffd163f", "1c3110a38b12ed3d80efd797ffb8bc49", "3af78ee0987873b34a24fe0280dd3c0e"],
    "342303": ["45c339b1ca4875a1ee96e0010287dc37", "a88e3e7fbbaf9150f75f23ca77641d07", "dbd2729e7b0fee32cd99201a9d499369", "8b3a3467251e50530632b662af84c474", "6273e000e3b8673a409c46d77fd55a15", "35efa231e3abb50db469958cd124b840", "9006bf013951f2bdd85c6988a897368a", "b2a48939ad20750705a568169147ad5e", "456c35981d8af810463e4582fec11b44"],
    "342509": ["f9c4de2fb38bb8257933e823ac1fcce8", "cfcbcd2d3024e605f94fd186dfedd803", "710125c6ccaa6e2ed2c56179063cd111", "c761faa5ae0773c2f9793d3ef58c2367", "4a686a61735bb2db2ad31df28ae55ae9", "99d050fa1c2c38ffd8c42e26927027ca"],
    "348494": ["1b327f2d860c0d4ff60b8d9a2ce5977b", "90006e463364b8d39882144fe3fab11e", "cb9a730af1785df206e0db3beb77551b", "b3cb726d7ae25a35af8d5273c4250927", "c3572b70b0ed87a32aee713fcc4185d3"],
    "344388": ["bb974ca7fdb2ca98cd1eba9f16cb266f", "65952244cd78ffadc447b2737771ab06", "b8b715db87ff0d8a80a113c4b5358ce1", "59a73d6616ce345391656485bf83acb9", "e9b8bcf33e5f93eda13088742cdd48b1", "9bfea9fb28517c65611a50cb4323020b", "3f18929db64287cecd7a795d09c190a7"]
};

var NUEVOS = [
    {cod: 332621, titulo: "Casa en Urb Alto de Paramillo Palo Gordo", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 332698, titulo: "Casa en Obra Blanca Caneyes", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 333336, titulo: "Terreno en Velandria Capacho", tipo: "Terreno", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 333193, titulo: "Galpón en Palo Gordo Parte Alta", tipo: "Galpón", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 332672, titulo: "Casa en Rubio", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 332676, titulo: "Casa Rubio", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 333251, titulo: "Terreno en Rubio", tipo: "Terreno", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 332693, titulo: "Local Comercial # 1", tipo: "Local", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 332699, titulo: "Local Comercial en C.C Boulevard Los Mangos", tipo: "Local", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 333325, titulo: "Oficina Torre E #1005", tipo: "Local", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 332680, titulo: "Apartamento Azahares", tipo: "Apartamento", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 332740, titulo: "Apartamento #2 Polígono de Tiro", tipo: "Apartamento", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 333190, titulo: "Apartamento en Barrio Bolívar", tipo: "Apartamento", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 333238, titulo: "Apartamento Res Alcázar", tipo: "Apartamento", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 332689, titulo: "Casa en Obra Blanca Urb Vasconia", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 332751, titulo: "Casa Urb La Lugareña Polígono de Tiro", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 332758, titulo: "Casa en Urb La Lugareña", tipo: "Casa", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 332737, titulo: "Local Comercial #1 en El Polígono del Tiro", tipo: "Local", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 333353, titulo: "Parcela #1 San Juan de Colón", tipo: "Terreno", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 332697, titulo: "Terreno en Tucape", tipo: "Terreno", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 349182, titulo: "Local Comercial Centro Comercial El Pinar", tipo: "Local", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 349424, titulo: "Casa en Proyecto Número 1 Arjona Valle Arriba", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 349419, titulo: "Proyecto Urb Valle Arriba Casa #3", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 351145, titulo: "Casa para Remodelación en La Concordia San Cristóbal", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 349190, titulo: "Casa Barrio Obrero", tipo: "Casa", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 350710, titulo: "Local Comercial en C.C El Pinar", tipo: "Local", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 351143, titulo: "Local Comercial Carrera 14 Entre Calle 9 y 10 Barrio San Carlos", tipo: "Local", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 339310, titulo: "Casa o Townhouse", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 339306, titulo: "Casa Capacho Independencia Floriana", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 337412, titulo: "Apartamento Urbanización Los Teques", tipo: "Apartamento", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 338442, titulo: "Apartamento Terrazas El Tama Avenida", tipo: "Apartamento", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 341305, titulo: "Apartamento Residencias Estancia Suite Pueblo Nuevo", tipo: "Apartamento", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 335855, titulo: "Casa Obra Gris Cueva del Oso", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 336032, titulo: "Casa La Guacara San Cristóbal", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 337464, titulo: "Casa Urbanización San Gabriel Número 5", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 333703, titulo: "Local Comercial #2 C.C Niquitao", tipo: "Local", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 339502, titulo: "Local Comercial #4 C.C Niquitao", tipo: "Local", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 339898, titulo: "Local Comercial 1-12 Edificio Punto 58", tipo: "Local", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 341324, titulo: "Apartamento Residencia Estancia Suite Pueblo Nuevo", tipo: "Apartamento", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 341325, titulo: "Apartamento Conj Residencial Estancia Suite", tipo: "Apartamento", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 333426, titulo: "Parcela #2 San Juan de Colón", tipo: "Terreno", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 333427, titulo: "Parcela #3 San Juan de Colón", tipo: "Terreno", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 339313, titulo: "Casa Bella Vista Tucape Táriba", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 336730, titulo: "Casa en Obra Gris en Caneyes Conjunto Res Santa Fe", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 342511, titulo: "Parcela en Urb Santa Fe Caneyes", tipo: "Terreno", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 342824, titulo: "Terreno Casa del Padre, Potrero de Las Casas 2000 m²", tipo: "Terreno", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 342825, titulo: "Terreno Casa del Padre Potrero de Las Casas 400 m²", tipo: "Terreno", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 344384, titulo: "Casa Rural en El Volador Vía Lobatera", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 345837, titulo: "Galpón Palo Gordo Calle 2 del Medio Cardenas", tipo: "Galpón", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 342521, titulo: "Parcela Calle 1 de Palo Gordo", tipo: "Terreno", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 348172, titulo: "Terreno con Avance de Construcción en Peribeca", tipo: "Terreno", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 348169, titulo: "Galpón en Sabaneta", tipo: "Galpón", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 342303, titulo: "Apartamento Los Teques II", tipo: "Apartamento", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 342509, titulo: "Casa en Propiedad Horizontal para Uso Comercial Nivel Calle", tipo: "Casa", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 348494, titulo: "Casa en La Urb Charaima", tipo: "Casa", op: "Venta", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""},
    {cod: 344388, titulo: "Habitación Tipo Estudio", tipo: "Apartamento", op: "Alquiler", precio: 0, zona: "Táchira", m2: null, terreno: null, foto: ""}
];

function fotosDe(cod) {
    var lista = [];
    var nombres = FOTOS[cod];

    if (nombres == undefined) {
        return lista;
    }

    for (var i = 0; i < nombres.length; i++) {
        var nombre = nombres[i];

        if (nombre.indexOf("_") == -1) {
            nombre = PREFIJO + nombre;
        }

        lista.push(RUTA + cod + "/" + nombre + ".webp");
    }

    return lista;
}