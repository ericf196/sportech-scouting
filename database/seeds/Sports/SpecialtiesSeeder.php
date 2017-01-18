<?php

use App\Scouting\Entities\Sports\Specialty;
use App\Scouting\Entities\Sports\Sport;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SpecialtiesSeeder extends Seeder
{
    public $specialties = [
        array(1, ['es' => 'Florete', 'en' => 'Foil'], 'Florete de esgrima'),
        array(1, ['es' => 'Sable', 'en' => 'Saber'], 'Sable de esgrima'),
        array(1, ['es' => 'Espada', 'en' => 'Epee'], 'Espada de esgrima'),
        /* array(9, ['es' => 'Guardameta', 'en' => 'Goalkeeper'], 'Guardameta de balonmano'),
         array(9, ['es' => 'Central', 'en' => 'Central'], 'Central de balonmano'),
         array(9, ['es' => 'Esgrima', 'en' => 'Winger'], 'Extremo de balonmano'),
         array(9, ['es' => 'Lateral', 'en' => 'Lateral'], 'Lateral de balonmano'),
         array(9, ['es' => 'Pivote', 'en' => 'Pivot'], 'Pivote de balonmano'),
         array(8, ['es' => 'Ataque', 'en' => 'Attack'], 'Ataque de waterpolo'),
         array(8, ['es' => 'Defensa', 'en' => 'Defense'], 'Defensa de waterpolo'),
         array(8, ['es' => 'Portero', 'en' => 'Goalkeeper'], 'Portero de waterpolo'),
         array(7, ['es' => 'Arrancada', 'en' => 'Snatch'], 'Modalidad de halterofilia'),
         array(7, ['es' => 'Jerk', 'en' => 'Jerk'], 'Modalidad de halterofilia'),
         array(6, ['es' => 'Grecorromana', 'en' => 'Greco-Roman'], 'Estilo de lucha olimpica'),
         array(6, ['es' => 'Estilo libre', 'en' => 'Freestyle'], 'Estilo de lucha olimpica'),
         array(5, ['es' => 'Base', 'en' => 'Base'], 'Base de Baloncesto'),
         array(5, ['es' => 'Escolta', 'en' => 'Shooting guard'], 'Escolta de Baloncesto'),
         array(5, ['es' => 'Alero', 'en' => 'Forward'], 'Alero de Baloncesto'),
         array(5, ['es' => 'Ala-Pívot', 'en' => 'Power forward'], 'Ala-Pívot de Baloncesto'),
         array(5, ['es' => 'Pívot', 'en' => 'Pivot'], 'Pívot de Baloncesto'),
         array(4, ['es' => 'Lanzador', 'en' => 'Pitcher'], 'Lanzador de beisbol'),
         array(4, ['es' => 'Receptor', 'en' => 'Receiver'], 'Receptor de beisbol'),
         array(4, ['es' => 'Primera Base', 'en' => 'First Base'], 'Primera Base de beisbol'),
         array(4, ['es' => 'Segunda Base', 'en' => 'Second Base'], 'Segunda Base de beisbol'),
         array(4, ['es' => 'Tercera Base', 'en' => 'Third Base'], 'Tercera Base de beisbol'),
         array(4, ['es' => 'Campocorto', 'en' => 'Shortstop'], 'Campocorto de beisbol'),
         array(4, ['es' => 'Jardinero Izquierdo', 'en' => 'Left fielder'], 'Jardinero Izquierdo de beisbol'),
         array(4, ['es' => 'Jardinero Central', 'en' => 'Center fielder'], 'Jardinero Central de beisbol'),
         array(4, ['es' => 'Jardinero Derecho', 'en' => 'Right fielder'], 'Jardinero Derecho de beisbol'),
         array(4, ['es' => 'Bateador Designado', 'en' => 'Designated Hitter'], 'Bateador Designado de beisbol'),
         array(3, ['es' => 'Atacante', 'en' => 'Forward'], 'Atacante de voleibol'),
         array(3, ['es' => 'Armador', 'en' => 'Owner'], 'Armador de voleibol'),
         array(3, ['es' => 'Libero', 'en' => 'Libero'], 'Libero de voleibol'),
         array(2, ['es' => 'Individual', 'en' => 'Single'], 'Individual de badminton'),
         array(2, ['es' => 'Dobles', 'en' => 'Double'], 'Dobles de badminton'),
         array(2, ['es' => 'Dobles Mixtos', 'en' => 'Mixed Doubles'], 'Dobles Mixtos de badminton'),
         array(10, ['es' => '6to Kyu', 'en' => '6to Kyu'], 'Rokkyu Cinturón Blanco Judo'),
         array(10, ['es' => '5to Kyu', 'en' => '5to Kyu'], 'Gokyu  Cinturón Amarillo Judo'),
         array(10, ['es' => '4to Kyu', 'en' => '4to Kyu'], 'Yonkyu  Cinturón Naranja Judo'),
         array(10, ['es' => '3ro Kyu', 'en' => '3ro Kyu'], 'Sankyu  Cinturón Verde Judo'),
         array(10, ['es' => '2do Kyu', 'en' => '2do Kyu'], 'Nikyu  Cinturón Azul Judo'),
         array(10, ['es' => '1ro Kyu', 'en' => '1ro Kyu'], 'Ikkyu  Cinturón Marron Judo'),
         array(10, ['es' => '1er Dan', 'en' => '1er Dan'], 'Shodan  Cinturón Negro Judo'),
         array(10, ['es' => '2do Dan', 'en' => '2do Dan'], 'Nidan  Cinturón Negro Judo'),
         array(10, ['es' => '3er Dan', 'en' => '3er Dan'], 'Sandan  Cinturón Negro Judo'),
         array(10, ['es' => '4to Dan', 'en' => '4to Dan'], 'Yondan  Cinturón Negro Judo'),
         array(10, ['es' => '5to Dan', 'en' => '5to Dan'], 'Godan Cinturón Negro Judo'),
         array(10, ['es' => '6to Dan', 'en' => '6to Dan'], 'Rokudan Cinturón Negro o Rojo y Blanco Judo'),
         array(10, ['es' => '7mo Dan', 'en' => '7mo Dan'], 'Sichidan Cinturón Negro o Rojo y Blanco Judo'),
         array(10, ['es' => '8vo Dan', 'en' => '8vo Dan'], 'Hachidan Cinturón Negro o Rojo y Blanco Judo'),
         array(10, ['es' => '9no Dan', 'en' => '9no Dan'], 'Kudan Cinturón Rojo Judo'),
         array(10, ['es' => '10mo Dan', 'en' => '10mo Dan'], 'Judan Cinturón Rojo Judo'),
         array(11, ['es' => '10mo Kup', 'en' => '10mo Kup'], 'Cinturón Blanco Taekwondo - WTF'),
         array(11, ['es' => '9no Kup', 'en' => '9no Kup'], 'Cinturón Blanco punta amarilla Taekwondo - WTF'),
         array(11, ['es' => '8vo Kup', 'en' => '8vo Kup'], 'Cinturón Amarillo  Taekwondo - WTF'),
         array(11, ['es' => '7mo Kup', 'en' => '7mo Kup'], 'Cinturón Amarillo punta verde Taekwondo - WTF'),
         array(11, ['es' => '6to Kup', 'en' => '6to Kup'], 'Cinturón Verde Taekwondo - WTF'),
         array(11, ['es' => '5to Kup', 'en' => '5to Kup'], 'Cinturón Verde punta azul Taekwondo - WTF'),
         array(11, ['es' => '4to Kup', 'en' => '4to Kup'], 'Cinturón Azul Taekwondo - WTF'),
         array(11, ['es' => '3er Kup', 'en' => '3er Kup'], 'Cinturón Azul punta roja Taekwondo - WTF'),
         array(11, ['es' => '2do Kup', 'en' => '2do Kup'], 'Cinturón Rojo Taekwondo - WTF'),
         array(11, ['es' => '1ro Kup', 'en' => '1ro Kup'], 'Cinturón Rojo punta negra Taekwondo - WTF'),
         array(11, ['es' => '1er Dan', 'en' => '1er Dan'], 'Cinturón Negro Taekwondo - WTF'),
         array(11, ['es' => '2do Dan', 'en' => '2do Dan'], 'Cinturón Negro Taekwondo - WTF'),
         array(11, ['es' => '3er Dan', 'en' => '3er Dan'], 'Cinturón Negro Taekwondo - WTF'),
         array(11, ['es' => '4to Dan', 'en' => '4to Dan'], 'Cinturón Negro Taekwondo - WTF'),
         array(11, ['es' => '5to Dan', 'en' => '5to Dan'], 'Cinturón Negro Taekwondo - WTF'),
         array(11, ['es' => '6to Dan', 'en' => '6to Dan'], 'Cinturón Negro Taekwondo - WTF'),
         array(11, ['es' => '7mo Dan', 'en' => '7mo Dan'], 'Cinturón Negro Taekwondo - WTF'),
         array(11, ['es' => '8vo Dan', 'en' => '8vo Dan'], 'Cinturón Negro Taekwondo - WTF'),
         array(11, ['es' => '9no Dan', 'en' => '9no Dan'], 'Cinturón Negro Taekwondo - WTF'),
         array(11, ['es' => '10mo Dan', 'en' => '10mo Dan'], 'Cinturón Negro Taekwondo - WTF'),
         array(12, ['es' => '6to Kyu', 'en' => '6to Kyu'], 'Rokkyu Cinturón Blanco Karate-do'),
         array(12, ['es' => '5to Kyu', 'en' => '5to Kyu'], 'Gokyu  Cinturón Amarillo Karate-do'),
         array(12, ['es' => '4to Kyu', 'en' => '4to Kyu'], 'Yonkyu  Cinturón Naranja Karate-do'),
         array(12, ['es' => '3ro Kyu', 'en' => '3ro Kyu'], 'Sankyu  Cinturón Verde Karate-do'),
         array(12, ['es' => '2do Kyu', 'en' => '2do Kyu'], 'Nikyu  Cinturón Azul Karate-do'),
         array(12, ['es' => '1ro Kyu', 'en' => '1ro Kyu'], 'Ikkyu  Cinturón Marron Karate-do'),
         array(12, ['es' => '1er Dan', 'en' => '1er Dan'], 'Shodan  Cinturón Negro Karate-do'),
         array(12, ['es' => '2do Dan', 'en' => '2do Dan'], 'Nidan  Cinturón Negro Karate-do'),
         array(12, ['es' => '3er Dan', 'en' => '3er Dan'], 'Sandan  Cinturón Negro Karate-do'),
         array(12, ['es' => '4to Dan', 'en' => '4to Dan'], 'Yondan  Cinturón Negro Karate-do'),
         array(12, ['es' => '5to Dan', 'en' => '5to Dan'], 'Godan Cinturón Negro Karate-do'),
         array(12, ['es' => '6to Dan', 'en' => '6to Dan'], 'Rokudan Cinturón Negro o Rojo y Blanco Karate-do'),
         array(12, ['es' => '7mo Dan', 'en' => '7mo Dan'], 'Sichidan Cinturón Negro o Rojo y Blanco Karate-do'),
         array(12, ['es' => '8vo Dan', 'en' => '8vo Dan'], 'Hachidan Cinturón Negro o Rojo y Blanco Karate-do'),
         array(12, ['es' => '9no Dan', 'en' => '9no Dan'], 'Kudan Cinturón Rojo Karate-do'),
         array(12, ['es' => '10mo Dan', 'en' => '10mo Dan'], 'Judan Cinturón Rojo Karate-do'),
         array(13, ['es' => 'Aguas Tranquilas-Sprint', 'en' => 'Aguas Tranquilas-Sprint'], 'Modalidad de Piragüismo'),
         array(13, ['es' => 'Slalom', 'en' => 'Slalom'], 'Modalidad de Piragüismo'),
         array(13, ['es' => 'Aguas Bravas', 'en' => 'Aguas Bravas'], 'Modalidad de Piragüismo'),
         array(13, ['es' => 'Rafting', 'en' => 'Rafting'], 'Modalidad de Piragüismo'),
         array(13, ['es' => 'Marathon', 'en' => 'Marathon'], 'Modalidad de Piragüismo'),
         array(13, ['es' => 'Kayak de Mar', 'en' => 'Kayak de Mar'], 'Modalidad de Piragüismo'),
         array(13, ['es' => 'Kayak Polo', 'en' => 'Kayak Polo'], 'Modalidad de Piragüismo'),
         array(13, ['es' => 'Ascensos, Descensos y Travesias', 'en' => 'Ascensos, Descensos y Travesias'], 'Modalidad de Piragüismo'),
         array(13, ['es' => 'Piragüismo Recreativo', 'en' => 'Piragüismo Recreativo'], 'Modalidad de Piragüismo'),
         array(13, ['es' => 'Estilo Libre', 'en' => 'Freestyle'], 'Modalidad de Piragüismo'),
         array(13, ['es' => 'Kayak-Surf', 'en' => 'Kayak-Surf'], 'Modalidad de Piragüismo'),
         array(13, ['es' => 'Barcos de Dragón', 'en' => 'Barcos de Dragón'], 'Modalidad de Piragüismo'),
         array(13, ['es' => 'Piragüismo Adaptado', 'en' => 'Piragüismo Adaptado'], 'Modalidad de Piragüismo'),
         array(14, ['es' => 'Por Parejas', 'en' => 'Double'], 'Especialidad de Padel'),
         array(14, ['es' => 'Por Equipos', 'en' => 'Team'], 'Especialidad de Padel'),
         array(15, ['es' => 'Guardameta', 'en' => 'Goalkeeper'], 'Guardameta de Futbol'),
         array(15, ['es' => 'Defensa', 'en' => 'Defense'], 'Defensa de Futbol'),
         array(15, ['es' => 'Centrocampista', 'en' => 'Centrocampista'], 'Centrocampista de Futbol'),
         array(15, ['es' => 'Delantero', 'en' => 'Forward'], 'Delantero de Futbol')*/
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fencing = Sport::where('name->en', 'Fencing')->first();
        if ($fencing) {
            foreach ($this->specialties as $specialty) {
                Specialty::create([
                    'sport_id'   => $fencing->id,
                    'name'       => $specialty[1],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }
    }
}
