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
   ["Calle Ríos N4-183 y Chile", "3161801  Ext 220","Medicina General, Ginecología, Obstetricia, Psicología, Laboratorio clínico, Nutrición, Trabajo Social, Profilaxis"],
   /* LA VICENTINA */
   ["Av. Oriental 248 y Cajías Vicentina Alta", "2526714","Medicina General, Obstetricia, Odontología"],
   /* JARDINES DEL VALLE */
   ["Eloy  Alfaro", "2601491","Medicina General, Obstetricia, Odontología",""],
   /* CENTRO HISTÓRICO */
   ["Rocafuerte 1545 y Venezuela","2283017  Ext 2283","Medicina General Pediatría Ginecología Obstetricia Emergencia Maternidad de corta estancia Ecografía Laboratorio Rayos X Terapia familiar Odontología Salud Mental Profilaxis"],
   /* EL PLACER */
   ["El Placer 1317","3151370","Medicina General Peditría Obstetricia Odontología"],
   /* LA BASÍLICA */
   ["Carchi y Venezuela","3151711","Medicina General Peditría Obstetricia Odontología"],
   /* PLAZA ARENAS */
   ["Vargas 444 y Galápagos","2952980","Medicina General Pediatría Obstetricia Odontología"],
   /* GANOTENA POSSE */
   ["Rocafuerte 834-","2281135","Cuidado Infantil Medicina General Pediatría Ginecología Obstetricia Laboratorio Odontología Salud Mental"],
   /* TOCTIUCO */
   ["PS, Allende 755 y Alondo de Cevallos","2952600","Medicina General Pediatría Obstetricia Odontología"],
   /* CHIMBACALLE */
   ["Av. Napo y J. del Alcázar Chimbacalle","2657407","Emergencia, Maternidad de corta estancia, Ecografía, Laboratorio, Rayos X, Terapia  familiar, Odontología, Educación Popular"],
   /* CHIRIACU BAJO */
   ["Martín de la Calle y Hernán Morillo","2658068","Medicina General, Pediatría, Ginecología"],
   /* CHIRIACU ALTO */
   ["Gonzalo Marín s/n y Sumbá","2610488","Medicina General, Pediatría, Ginecología"],
   /* FERROVIARA BAJA */
   ["Juan Cueva García","2655494","Medicina General, Pediatría, Ginecología, Psicología"],
   /* FERROVIARA ALTA */
   ["Eduardo Vorley s/n","2658029","Medicina General, Pediatría, Ginecología, Psicología"],
   /* LA FORESTAL */
   ["Chicán y Omaguas","2648673","Medicina General, Pediatría, Ginecología"],
   /* LULUNCOTO */
   ["Fernando Ruiz","2650434","Medicina General, Pediatría, Ginecología"],
   /* OBRERO INDEPENDIENTE */
   ["Coop. Obrero Independiente P Y B","2608350","Medicina General, Pediatría, Ginecología"],
   /* BARRIO PALUCO */
   ["Av. Oriental Primer Puente","2602284","Medicina General, Pediatría, Ginecología"],
   /* PIO XII */
   ["Caneonama Nº 746","3130985","Medicina General, Pediatría, Ginecología"],
   /* PUENGSÍ 1 */
   ["Calle j y H 2da Etapa O. Independiente","2603738","Medicina General, Pediatría, Ginecología"],
    /* PUENGSÍ 2 */
   ["Gonzalo Arboleda s/n","2604558","Medicina General, Pediatría, Ginecología"],
   /* PUENGSÍ 3 */
   ["Coop. San Isidro Calle D y N s/n","","Medicina General, Pediatría, Ginecología"],
   /* UNION DE CIUDADELAS */
   ["Saquisilí s/n y Juan Vizuete","3190057","Medicina General, Pediatría, Ginecología"],
   /* CIUDADELA ATAHUALPA*/
   ["Cadena Núñez y Jipijapa Casa Barrial","2615930","Medicina General, Obstetricia, Odontología, Vacunas"],
   /* GATAZO */
   ["Sigchos","2848409","Medicina General, Obstetricia, Odontología, Vacunas"],
   /* JESUS DEL GRAN PODER */
   ["","","Medicina General, Obstetricia, Odontología, Vacunas"],
   /* LA RAYA */
   ["","","Medicina General, Obstetricia, Odontología, Vacunas"],
   /* LLOA */
   ["","","Medicina General, Obstetricia, Odontología, Vacunas"],
   /* PROMOCION FAMILIAR */
   ["","","Medicina General, Obstetricia, Odontología, Vacunas"],
   /* QUITO SUR */
   ["","","Medicina General, Obstetricia, Odontología, Vacunas"],
   /* TARQUE */
   ["","","Medicina General, Obstetricia, Odontología, Vacunas"],
   /* LA LIBERTAD */
   ["","","Medicina General, Obstetricia, Odontología, Vacunas"],
   /* NUEVA AURORA */
   ["","","Medicina General, Pediatría, Ginecología, Obstetricia, Laboratorio, Rayos X, Odontología, Salud Mental"],
   /* LA ERMITA */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* LUCHA DE LOS POBRES */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* AIDA LEON */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* HIERBA BUENA 1 */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* HIERBA BUENA 2 */
   ["","","Medicina General, Obstetricia, Odontología, Laboratorio, Psicología"],
   /* LA ARGELIA */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* EL CARMEN */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* ORIENTE QUITEÑO */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* SANGOLQUI */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* CAPELO */
   ["","","Medicina General, Obstetricia, Odontología, Laboratorio, Psicología"],
   /* COTOGCHOA */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* CURIPUNGO */
   ["","","Medicina Interna, Pediatría, Gineco Obstetricia, Cirugía, Odontología, Laboratorio Clínico, Rayos X, Psicología, Traumatología, Salud Mental"],
   /* FAJARDO */
   ["","","Medicina General, Obstricia"],
   /* JUTUMPUNGO */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* SAN FER DE SANGOLQUI */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* SELVA ALEGRE */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* RUMIPAMBA */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* ALOAG */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* ALOASI */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* CHAUPI */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* TABILLO */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* UYUMBICHO */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* CUTUGLAHUA */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* TANDAPI */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* GUAMANI */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* ASISTENCIA SOCIAL */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* CAUPICHO */
   ["","","Medicina General, Pediatría, Obstetricia, Odontología"],
   /* EL BLNAQUEADO */
   ["","","Medicina General, Obstetricia, Emergencia, Maternidad de corta estancia, Neonatología, Odontología, Laboratorio clínico, Medicina alternativa"],
   /* EL ROCIO */
   ["","","Medicina General, Ginecología"],
   /* MATILDE ALVAREZ */
   ["","","Medicina General, Ginecología"],
   /* PUEBLO UNIDO */
   ["","","Medicina General, Ginecología"],
   /* SAN MARTIN DE PORRES */
   ["","","Medicina General, Ginecología"],
   /* VICTORIA CENTRAL */
   ["","","Medicina General, Ginecología"],
   /* CIUDADELA IBARRA */
   ["","","Medicina General, Ginecología"],
   /* CIUDADELA IBARRA */
   ["","","Medicina General, Ginecología"],
   /* CHILLOGALLO */
   ["","","Medicina General, Ginecología"],
   /* EL TRANSITO */
   ["","","Medicina General, Ginecología"],
   /* ISLA SOLADA */
   ["","","Medicina General, Pediatría, Obstetricia, Psicología, Laboratorio Clínico"],
   /* LA ECUATORIANA */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* LA INMACULADA */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* MARTHA BUCARAM */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* SAN LUIS */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* SANTA BARBARA */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* SANTA CRUZ */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* TURUBAMBA */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* BUENA VENTURA */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* CONOCOTO */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* ALANGASI */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* AMAGUAÑA */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* CUENDINA */
   ["","","Medicina General, Ginecología, Obstetricia, Psicología, Laboratorio clínico, Trabajo Social"],
   /* EL TINGO */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* GUANGOPOLO */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* LA MERCED */
   ["","","Medicina General, Obstetricia, Odontología"],
   /* PINTAG */
   ["Casa Parroquial","2383009","Medicina General, Obstetricia, Odontología"],
   /* TOLONTAG */
   ["Antisana s/n","2320020","Medicina General, Obstetricia, Odontología"],

];

/*Imágenes*/
