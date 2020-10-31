var barrios=[
   "la tola", "la vicentina", "jardines del valle","centro historico","el placer","la basilica","plaza arenas"
   ,"gangotena posse","toctiuco","chimbacalle","chiriacu bajo","chiriacu alto","ferroviara baja","ferroviaria alta"
   ,"la forestal","luluncoto","obrero independiente","barrio paluco","pio xii","puengsi 1","puengsi 2","puengsi 3"
   ,"union de ciudadelas","ciudadela atahualpa","gatazo","jesus del gran poder","la raya","lloa","promocion familiar"
   ,"quito sur","tarque","la libertad","nueva aurora","la ermita","lucha de los pobres","aida leon","hierba buena 1"
   ,"hierba buena 2","la argelia","el carmen mercado mayorista calle proceso","oriente quiteño","sangolqui","capelo"
   ,"cotogchoa","curipungo","fajardo","jutumpungo","san fer de sangolqui","selva alegre","rumipamba","aloag","aloasi"
   ,"chaupi","tambillo","uyumbicho","cutuglahua","tandapi","guamani","asistencia social","caupicho","el blanqueado"
   ,"el rocio","matilde alvarez","pueblo unido","san martin de porres","victoria central","ciudadela ibarra"
   ,"chillogallo","el transito","isla solanda","la ecuatoriana","la inmaculada","martha bucaram","san luis"
   ,"santa barbara","santa cruz","turubamba","buena ventura","conocoto","alangasi","amaguaña","cuendina"
   ,"el tingo","guangopolo","la merced","pintag","tolontag"];


var Informacion=[
   /* TOLA*/
   ["Calle Ríos N4-183 y Chile", "3161801  Ext 220","Medicina General, Ginecología, Obstetricia, Psicología, Laboratorio clínico, Nutrición, Trabajo Social, Profilaxis", "8:00-16:00"],
   /* LA VICENTINA */
   ["Av. Oriental 248 y Cajías Vicentina Alta", "2526714","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* JARDINES DEL VALLE */
   ["Eloy  Alfaro", "2601491","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* CENTRO HISTÓRICO */
   ["Rocafuerte 1545 y Venezuela","2283017  Ext 2283","Medicina General Pediatría Ginecología Obstetricia Emergencia Maternidad de corta estancia Ecografía Laboratorio Rayos X Terapia familiar Odontología Salud Mental Profilaxis","8:00-16:00"],
   /* EL PLACER */
   ["El Placer 1317","3151370","Medicina General Peditría Obstetricia Odontología" ,"8:00-16:00"],
   /* LA BASÍLICA */
   ["Carchi y Venezuela","3151711","Medicina General Peditría Obstetricia Odontología","8:00-16:00"],
   /* PLAZA ARENAS */
   ["Vargas 444 y Galápagos","2952980","Medicina General Pediatría Obstetricia Odontología","8:00-16:00"],
   /* GANOTENA POSSE */
   ["Rocafuerte 834-","2281135","Cuidado Infantil Medicina General Pediatría Ginecología Obstetricia Laboratorio Odontología Salud Mental","8:00-16:00"],
   /* TOCTIUCO */
   ["PS, Allende 755 y Alondo de Cevallos","2952600","Medicina General Pediatría Obstetricia Odontología","8:00-16:00"],
   /* CHIMBACALLE */
   ["Av. Napo y J. del Alcázar Chimbacalle","2657407","Emergencia, Maternidad de corta estancia, Ecografía, Laboratorio, Rayos X, Terapia  familiar, Odontología, Educación Popular"],"8:00-16:00",
   /* CHIRIACU BAJO */
   ["Martín de la Calle y Hernán Morillo","2658068","Medicina General, Pediatría, Ginecología","8:00-16:00"],
   /* CHIRIACU ALTO */
   ["Gonzalo Marín s/n y Sumbá","2610488","Medicina General, Pediatría, Ginecología","8:00-16:00"],
   /* FERROVIARA BAJA */
   ["Juan Cueva García","2655494","Medicina General, Pediatría, Ginecología, Psicología","8:00-16:00"],
   /* FERROVIARA ALTA */
   ["Eduardo Vorley s/n","2658029","Medicina General, Pediatría, Ginecología, Psicología","8:00-16:00"],
   /* LA FORESTAL */
   ["Chicán y Omaguas","2648673","Medicina General, Pediatría, Ginecología","8:00-16:00"],
   /* LULUNCOTO */
   ["Fernando Ruiz","2650434","Medicina General, Pediatría, Ginecología","8:00-16:00"],
   /* OBRERO INDEPENDIENTE */
   ["Coop. Obrero Independiente P Y B","2608350","Medicina General, Pediatría, Ginecología","8:00-16:00"],
   /* BARRIO PALUCO */
   ["Av. Oriental Primer Puente","2602284","Medicina General, Pediatría, Ginecología","8:00-16:00"],
   /* PIO XII */
   ["Caneonama Nº 746","3130985","Medicina General, Pediatría, Ginecología","8:00-16:00"],
   /* PUENGSÍ 1 */
   ["Calle j y H 2da Etapa O. Independiente","2603738","Medicina General, Pediatría, Ginecología","8:00-16:00","8:00-16:00"],
    /* PUENGSÍ 2 */
   ["Gonzalo Arboleda s/n","2604558","Medicina General, Pediatría, Ginecología","8:00-16:00"],
   /* PUENGSÍ 3 */
   ["Coop. San Isidro Calle D y N s/n","","Medicina General, Pediatría, Ginecología","8:00-16:00"],
   /* UNION DE CIUDADELAS */
   ["Saquisilí s/n y Juan Vizuete","3190057","Medicina General, Pediatría, Ginecología","8:00-16:00"],
   /* CIUDADELA ATAHUALPA*/
   ["Cadena Núñez y Jipijapa Casa Barrial","2615930","Medicina General, Obstetricia, Odontología, Vacunas","8:00-16:00"],
   /* GATAZO */
   ["Sigchos","2848409","Medicina General, Obstetricia, Odontología, Vacunas","8:00-16:00"],
   /* JESUS DEL GRAN PODER */
   ["Colombo S-N Cima de la Libertad","3103618","Medicina General, Obstetricia, Odontología, Vacunas","8:00-16:00"],
   /* LA RAYA */
   ["Calle Carapungo s/n","2634143","Medicina General, Obstetricia, Odontología, Vacunas","8:00-16:00"],
   /* LLOA */
   ["Parque Coop 29 de Mayo","2850014","Medicina General, Obstetricia, Odontología, Vacunas","8:00-16:00"],
   /* PROMOCION FAMILIAR */
   ["Serapio Japerabi s/n","2625281","Medicina General, Obstetricia, Odontología, Vacunas","8:00-16:00"],
   /* QUITO SUR */
   ["Gaspar Cujías G. Casa 97","2623883","Medicina General, Obstetricia, Odontología, Vacunas","8:00-16:00"],
   /* TARQUE */
   ["Rio Cañaris- Casa Barrial","2623904","Medicina General, Obstetricia, Odontología, Vacunas","8:00-16:00"],
   /* LA LIBERTAD */
   ["Oleary 782 y Punaes. La Libertad","2287383","Medicina General, Obstetricia, Odontología, Vacunas","8:00-16:00"],
   /* NUEVA AURORA */
   ["Río Cinto y Silanche","2581093","Medicina General, Pediatría, Ginecología, Obstetricia, Laboratorio, Rayos X, Odontología, Salud Mental","8:00-16:00"],
   /* LA ERMITA */
   ["Calle la Hermita y Abdón Calderón","2953871","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* LUCHA DE LOS POBRES */
   ["Av. Nueva Oriental Mz A K","2674193","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* HIERBA BUENA 1 */
   ["Pallatanga Nº 86 y Guadal","2677120","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* HIERBA BUENA 2 */
   ["Taya s/n y Caguasquí","2682331","Medicina General, Obstetricia, Odontología, Laboratorio, Psicología","8:00-16:00"],
   /* LA ARGELIA */
   ["Caluma y Ventanas Lote 19","2682024","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* EL CARMEN */
   ["Mercado Mayorista Calle Proceso","2674193","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* ORIENTE QUITEÑO */
   ["Calle2 Transversal C","2678543","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* SANGOLQUI */
   ["Luis Cordero s/n","2330975","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* CAPELO */
   ["Capelo- Mariana de Jesús","2866058","Medicina General, Obstetricia, Odontología, Laboratorio, Psicología","8:00-16:00"],
   /* COTOGCHOA */
   ["Barrio La Libertad","2311611","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* CURIPUNGO */
   ["Curipungo","2330975","Medicina Interna, Pediatría, Gineco Obstetricia, Cirugía, Odontología, Laboratorio Clínico, Rayos X, Psicología, Traumatología, Salud Mental","8:00-16:00"],
   /* FAJARDO */
   ["Calle Principal","315957","Medicina General, Obstricia","8:00-16:00"],
   /* JUTUMPUNGO */
   ["Calle Principal","2848409","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* SAN FER DE SANGOLQUI */
   ["San Fer. De Sangolquí","2604558","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* SELVA ALEGRE */
   ["Vía Rumipamba","2330975","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* RUMIPAMBA */
   ["Pérez Pareja y Luis Cordero","2674193","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* ALOAG */
   ["Rumiñahui- Panamericana Sur","2389606","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* ALOASI */
   ["Calle Sucre y Víctor Velasco","2309480","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* CHAUPI */
   ["Chaupi- Plaza Principal","2860842","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* TABILLO */
   ["Camilo Calvachi","2318025","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* UYUMBICHO */
   ["Octavio Rocha y Atacazo","2878735","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* CUTUGLAHUA */
   ["3 cuadras del puente hacia arriba","2690242","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* TANDAPI */
   ["Pana sur vía Santo Domingo","2177220","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* GUAMANI */
   ["Av. Maldonado y Pedro Quiñones s/n","2696728","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* ASISTENCIA SOCIAL */
   ["José Rivadeniera y Aurelio Guerrero","2677073","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* CAUPICHO */
   ["Av. Simón Bolívar- Nor-oriente","2690440","Medicina General, Pediatría, Obstetricia, Odontología","8:00-16:00"],
   /* EL BLNAQUEADO */
   ["L Dovbles","3650711","Medicina General, Obstetricia, Emergencia, Maternidad de corta estancia, Neonatología, Odontología, Laboratorio clínico, Medicina alternativa","8:00-16:00"],
   /* EL ROCIO */
   ["Av. Maldonado Km 10 1/2","2690440","Medicina General, Ginecología"],"8:00-16:00",
   /* MATILDE ALVAREZ */
   ["Calle A 11","","Medicina General, Ginecología","8:00-16:00"],
   /* PUEBLO UNIDO */
   ["Panamericana Sur Km 14 Calle S","2691189","Medicina General, Ginecología","8:00-16:00"],
   /* SAN MARTIN DE PORRES */
   ["Av. Simón Bolívar- Nor-oriente","2691253","Medicina General, Ginecología","8:00-16:00"],
   /* VICTORIA CENTRAL */
   ["Barrio San Luis. El Beaterio  Y-B","3650711","Medicina General, Ginecología","8:00-16:00"],
   /* CIUDADELA IBARRA */
   ["Patricio Romero s/n","2911139","Medicina General, Ginecología","8:00-16:00"],
   /* CIUDADELA IBARRA */
   ["Calle 10ma YF 	","2690243","Medicina General, Ginecología","8:00-16:00"],
   /* CHILLOGALLO */
   ["Luis Francisco López s/n y Av. Mariscal sucre","2627398","Medicina General, Ginecología","8:00-16:00"],
   /* EL TRANSITO */
   ["Julio Arias y Diego Barba","2840621","Medicina General, Ginecología","8:00-16:00"],
   /* ISLA SOLADA */
   ["Ambuquí  s/n  Iglesia","2630713","Medicina General, Pediatría, Obstetricia, Psicología, Laboratorio Clínico","8:00-16:00"],
   /* LA ECUATORIANA */
   ["Av. La Ecuatoriana e Ignacio Lecumberry","2847304","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* LA INMACULADA */
   ["Calle F Camal Metropolitano","2691885","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* MARTHA BUCARAM */
   ["Antonio Díaz","2637854","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* SAN LUIS */
   ["Calle N- Calle Principal","3037387","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* SANTA BARBARA */
   ["Betty Paredes y Sta. Elena","2637387","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* SANTA CRUZ */
   ["Calle Principal Manuelita Sáenz","2690243","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* TURUBAMBA */
   ["Calle B-O Turubamba Bajo","2684264","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* BUENA VENTURA */
   ["Barrio Buena Ventura","2640626","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* CONOCOTO */
   ["Eloy Alfaro y Oriente","2342208","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* ALANGASI */
   ["Benalcázar 232 Frente al Parque","2863212","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* AMAGUAÑA */
   ["Sucre y Juan Montalvo s/n","2879331","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* CUENDINA */
   ["Bucheli s/n","2862325","Medicina General, Ginecología, Obstetricia, Psicología, Laboratorio clínico, Trabajo Social","8:00-16:00"],
   /* EL TINGO */
   ["Amaguaña","2071005","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* GUANGOPOLO */
   ["Calle Principal","2386005","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* LA MERCED */
   ["Guangopolo calle Sucre s/n","","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* PINTAG */
   ["Casa Parroquial","2383009","Medicina General, Obstetricia, Odontología","8:00-16:00"],
   /* TOLONTAG */
   ["Antisana s/n","2320020","Medicina General, Obstetricia, Odontología","8:00-16:00"],

];

/*Imágenes*/
