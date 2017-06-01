<?php

use App\Scouting\Entities\Sports\Specialty;
use App\Scouting\Entities\Sports\Sport;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SpecialtiesSeeder extends Seeder
{
    public $specialties = [
        array('Fencing', ['es' => 'Florete', 'en' => 'Foil'], 'Florete de esgrima'),
        array('Fencing', ['es' => 'Sable', 'en' => 'Saber'], 'Sable de esgrima'),
        array('Fencing', ['es' => 'Espada', 'en' => 'Epee'], 'Espada de esgrima'),
        array('Handball', ['es' => 'Guardameta', 'en' => 'Goalkeeper'], 'Guardameta de balonmano'),
        array('Handball', ['es' => 'Central', 'en' => 'Central'], 'Central de balonmano'),
        array('Handball', ['es' => 'Esgrima', 'en' => 'Winger'], 'Extremo de balonmano'),
        array('Handball', ['es' => 'Lateral', 'en' => 'Lateral'], 'Lateral de balonmano'),
        array('Handball', ['es' => 'Pivote', 'en' => 'Pivot'], 'Pivote de balonmano'),
        array('Waterpolo', ['es' => 'Ataque', 'en' => 'Attack'], 'Ataque de waterpolo'),
        array('Waterpolo', ['es' => 'Defensa', 'en' => 'Defense'], 'Defensa de waterpolo'),
        array('Waterpolo', ['es' => 'Portero', 'en' => 'Goalkeeper'], 'Portero de waterpolo'),
        array('Weightlifting', ['es' => 'Arrancada', 'en' => 'Snatch'], 'Modalidad de halterofilia'),
        array('Weightlifting', ['es' => 'Jerk', 'en' => 'Jerk'], 'Modalidad de halterofilia'),
        array('Wrestling', ['es' => 'Grecorromana', 'en' => 'Greco-Roman'], 'Estilo de lucha olimpica'),
        array('Wrestling', ['es' => 'Estilo libre', 'en' => 'Freestyle'], 'Estilo de lucha olimpica'),
        array('Basketball', ['es' => 'Base', 'en' => 'Base'], 'Base de Baloncesto'),
        array('Basketball', ['es' => 'Escolta', 'en' => 'Shooting guard'], 'Escolta de Baloncesto'),
        array('Basketball', ['es' => 'Alero', 'en' => 'Forward'], 'Alero de Baloncesto'),
        array('Basketball', ['es' => 'Ala-Pívot', 'en' => 'Power forward'], 'Ala-Pívot de Baloncesto'),
        array('Basketball', ['es' => 'Pívot', 'en' => 'Pivot'], 'Pívot de Baloncesto'),
        array('Baseball', ['es' => 'Lanzador', 'en' => 'Pitcher'], 'Lanzador de beisbol'),
        array('Baseball', ['es' => 'Receptor', 'en' => 'Receiver'], 'Receptor de beisbol'),
        array('Baseball', ['es' => 'Primera Base', 'en' => 'First Base'], 'Primera Base de beisbol'),
        array('Baseball', ['es' => 'Segunda Base', 'en' => 'Second Base'], 'Segunda Base de beisbol'),
        array('Baseball', ['es' => 'Tercera Base', 'en' => 'Third Base'], 'Tercera Base de beisbol'),
        array('Baseball', ['es' => 'Campocorto', 'en' => 'Shortstop'], 'Campocorto de beisbol'),
        array('Baseball', ['es' => 'Jardinero Izquierdo', 'en' => 'Left fielder'], 'Jardinero Izquierdo de beisbol'),
        array('Baseball', ['es' => 'Jardinero Central', 'en' => 'Center fielder'], 'Jardinero Central de beisbol'),
        array('Baseball', ['es' => 'Jardinero Derecho', 'en' => 'Right fielder'], 'Jardinero Derecho de beisbol'),
        array('Baseball', ['es' => 'Bateador Designado', 'en' => 'Designated Hitter'], 'Bateador Designado de beisbol'),
        array('Volleyball', ['es' => 'Atacante', 'en' => 'Forward'], 'Atacante de voleibol'),
        array('Volleyball', ['es' => 'Armador', 'en' => 'Owner'], 'Armador de voleibol'),
        array('Volleyball', ['es' => 'Libero', 'en' => 'Libero'], 'Libero de voleibol'),
        array('Badminton', ['es' => 'Individual', 'en' => 'Single'], 'Individual de badminton'),
        array('Badminton', ['es' => 'Dobles', 'en' => 'Double'], 'Dobles de badminton'),
        array('Badminton', ['es' => 'Dobles Mixtos', 'en' => 'Mixed Doubles'], 'Dobles Mixtos de badminton'),
        array('Judo', ['es' => '6to Kyu', 'en' => '6to Kyu'], 'Rokkyu Cinturón Blanco Judo'),
        array('Judo', ['es' => '5to Kyu', 'en' => '5to Kyu'], 'Gokyu  Cinturón Amarillo Judo'),
        array('Judo', ['es' => '4to Kyu', 'en' => '4to Kyu'], 'Yonkyu  Cinturón Naranja Judo'),
        array('Judo', ['es' => '3ro Kyu', 'en' => '3ro Kyu'], 'Sankyu  Cinturón Verde Judo'),
        array('Judo', ['es' => '2do Kyu', 'en' => '2do Kyu'], 'Nikyu  Cinturón Azul Judo'),
        array('Judo', ['es' => '1ro Kyu', 'en' => '1ro Kyu'], 'Ikkyu  Cinturón Marron Judo'),
        array('Judo', ['es' => '1er Dan', 'en' => '1er Dan'], 'Shodan  Cinturón Negro Judo'),
        array('Judo', ['es' => '2do Dan', 'en' => '2do Dan'], 'Nidan  Cinturón Negro Judo'),
        array('Judo', ['es' => '3er Dan', 'en' => '3er Dan'], 'Sandan  Cinturón Negro Judo'),
        array('Judo', ['es' => '4to Dan', 'en' => '4to Dan'], 'Yondan  Cinturón Negro Judo'),
        array('Judo', ['es' => '5to Dan', 'en' => '5to Dan'], 'Godan Cinturón Negro Judo'),
        array('Judo', ['es' => '6to Dan', 'en' => '6to Dan'], 'Rokudan Cinturón Negro o Rojo y Blanco Judo'),
        array('Judo', ['es' => '7mo Dan', 'en' => '7mo Dan'], 'Sichidan Cinturón Negro o Rojo y Blanco Judo'),
        array('Judo', ['es' => '8vo Dan', 'en' => '8vo Dan'], 'Hachidan Cinturón Negro o Rojo y Blanco Judo'),
        array('Judo', ['es' => '9no Dan', 'en' => '9no Dan'], 'Kudan Cinturón Rojo Judo'),
        array('Judo', ['es' => '10mo Dan', 'en' => '10mo Dan'], 'Judan Cinturón Rojo Judo'),
        array('Taekwondo', ['es' => '10mo Kup', 'en' => '10mo Kup'], 'Cinturón Blanco Taekwondo - WTF'),
        array('Taekwondo', ['es' => '9no Kup', 'en' => '9no Kup'], 'Cinturón Blanco punta amarilla Taekwondo - WTF'),
        array('Taekwondo', ['es' => '8vo Kup', 'en' => '8vo Kup'], 'Cinturón Amarillo  Taekwondo - WTF'),
        array('Taekwondo', ['es' => '7mo Kup', 'en' => '7mo Kup'], 'Cinturón Amarillo punta verde Taekwondo - WTF'),
        array('Taekwondo', ['es' => '6to Kup', 'en' => '6to Kup'], 'Cinturón Verde Taekwondo - WTF'),
        array('Taekwondo', ['es' => '5to Kup', 'en' => '5to Kup'], 'Cinturón Verde punta azul Taekwondo - WTF'),
        array('Taekwondo', ['es' => '4to Kup', 'en' => '4to Kup'], 'Cinturón Azul Taekwondo - WTF'),
        array('Taekwondo', ['es' => '3er Kup', 'en' => '3er Kup'], 'Cinturón Azul punta roja Taekwondo - WTF'),
        array('Taekwondo', ['es' => '2do Kup', 'en' => '2do Kup'], 'Cinturón Rojo Taekwondo - WTF'),
        array('Taekwondo', ['es' => '1ro Kup', 'en' => '1ro Kup'], 'Cinturón Rojo punta negra Taekwondo - WTF'),
        array('Taekwondo', ['es' => '1er Dan', 'en' => '1er Dan'], 'Cinturón Negro Taekwondo - WTF'),
        array('Taekwondo', ['es' => '2do Dan', 'en' => '2do Dan'], 'Cinturón Negro Taekwondo - WTF'),
        array('Taekwondo', ['es' => '3er Dan', 'en' => '3er Dan'], 'Cinturón Negro Taekwondo - WTF'),
        array('Taekwondo', ['es' => '4to Dan', 'en' => '4to Dan'], 'Cinturón Negro Taekwondo - WTF'),
        array('Taekwondo', ['es' => '5to Dan', 'en' => '5to Dan'], 'Cinturón Negro Taekwondo - WTF'),
        array('Taekwondo', ['es' => '6to Dan', 'en' => '6to Dan'], 'Cinturón Negro Taekwondo - WTF'),
        array('Taekwondo', ['es' => '7mo Dan', 'en' => '7mo Dan'], 'Cinturón Negro Taekwondo - WTF'),
        array('Taekwondo', ['es' => '8vo Dan', 'en' => '8vo Dan'], 'Cinturón Negro Taekwondo - WTF'),
        array('Taekwondo', ['es' => '9no Dan', 'en' => '9no Dan'], 'Cinturón Negro Taekwondo - WTF'),
        array('Taekwondo', ['es' => '10mo Dan', 'en' => '10mo Dan'], 'Cinturón Negro Taekwondo - WTF'),
        array('Karate', ['es' => '6to Kyu', 'en' => '6to Kyu'], 'Rokkyu Cinturón Blanco Karate-do'),
        array('Karate', ['es' => '5to Kyu', 'en' => '5to Kyu'], 'Gokyu  Cinturón Amarillo Karate-do'),
        array('Karate', ['es' => '4to Kyu', 'en' => '4to Kyu'], 'Yonkyu  Cinturón Naranja Karate-do'),
        array('Karate', ['es' => '3ro Kyu', 'en' => '3ro Kyu'], 'Sankyu  Cinturón Verde Karate-do'),
        array('Karate', ['es' => '2do Kyu', 'en' => '2do Kyu'], 'Nikyu  Cinturón Azul Karate-do'),
        array('Karate', ['es' => '1ro Kyu', 'en' => '1ro Kyu'], 'Ikkyu  Cinturón Marron Karate-do'),
        array('Karate', ['es' => '1er Dan', 'en' => '1er Dan'], 'Shodan  Cinturón Negro Karate-do'),
        array('Karate', ['es' => '2do Dan', 'en' => '2do Dan'], 'Nidan  Cinturón Negro Karate-do'),
        array('Karate', ['es' => '3er Dan', 'en' => '3er Dan'], 'Sandan  Cinturón Negro Karate-do'),
        array('Karate', ['es' => '4to Dan', 'en' => '4to Dan'], 'Yondan  Cinturón Negro Karate-do'),
        array('Karate', ['es' => '5to Dan', 'en' => '5to Dan'], 'Godan Cinturón Negro Karate-do'),
        array('Karate', ['es' => '6to Dan', 'en' => '6to Dan'], 'Rokudan Cinturón Negro o Rojo y Blanco Karate-do'),
        array('Karate', ['es' => '7mo Dan', 'en' => '7mo Dan'], 'Sichidan Cinturón Negro o Rojo y Blanco Karate-do'),
        array('Karate', ['es' => '8vo Dan', 'en' => '8vo Dan'], 'Hachidan Cinturón Negro o Rojo y Blanco Karate-do'),
        array('Karate', ['es' => '9no Dan', 'en' => '9no Dan'], 'Kudan Cinturón Rojo Karate-do'),
        array('Karate', ['es' => '10mo Dan', 'en' => '10mo Dan'], 'Judan Cinturón Rojo Karate-do'),
        array('Canoeing', ['es' => 'Aguas Tranquilas-Sprint', 'en' => 'Aguas Tranquilas-Sprint'], 'Modalidad de Piragüismo'),
        array('Canoeing', ['es' => 'Slalom', 'en' => 'Slalom'], 'Modalidad de Piragüismo'),
        array('Canoeing', ['es' => 'Aguas Bravas', 'en' => 'Aguas Bravas'], 'Modalidad de Piragüismo'),
        array('Canoeing', ['es' => 'Rafting', 'en' => 'Rafting'], 'Modalidad de Piragüismo'),
        array('Canoeing', ['es' => 'Marathon', 'en' => 'Marathon'], 'Modalidad de Piragüismo'),
        array('Canoeing', ['es' => 'Kayak de Mar', 'en' => 'Kayak de Mar'], 'Modalidad de Piragüismo'),
        array('Canoeing', ['es' => 'Kayak Polo', 'en' => 'Kayak Polo'], 'Modalidad de Piragüismo'),
        array('Canoeing', ['es' => 'Ascensos, Descensos y Travesias', 'en' => 'Ascensos, Descensos y Travesias'], 'Modalidad de Piragüismo'),
        array('Canoeing', ['es' => 'Piragüismo Recreativo', 'en' => 'Piragüismo Recreativo'], 'Modalidad de Piragüismo'),
        array('Canoeing', ['es' => 'Estilo Libre', 'en' => 'Freestyle'], 'Modalidad de Piragüismo'),
        array('Canoeing', ['es' => 'Kayak-Surf', 'en' => 'Kayak-Surf'], 'Modalidad de Piragüismo'),
        array('Canoeing', ['es' => 'Barcos de Dragón', 'en' => 'Barcos de Dragón'], 'Modalidad de Piragüismo'),
        array('Canoeing', ['es' => 'Piragüismo Adaptado', 'en' => 'Piragüismo Adaptado'], 'Modalidad de Piragüismo'),
        array('Paddle', ['es' => 'Por Parejas', 'en' => 'Double'], 'Especialidad de Padel'),
        array('Paddle', ['es' => 'Por Equipos', 'en' => 'Team'], 'Especialidad de Padel'),
        array('Football', ['es' => 'Guardameta', 'en' => 'Goalkeeper'], 'Guardameta de Futbol'),
        array('Football', ['es' => 'Defensa', 'en' => 'Defense'], 'Defensa de Futbol'),
        array('Football', ['es' => 'Centrocampista', 'en' => 'Centrocampista'], 'Centrocampista de Futbol'),
        array('Football', ['es' => 'Delantero', 'en' => 'Forward'], 'Delantero de Futbol')
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->specialties as $specialty) {
            $sportName = $specialty[0];
            $sport = Sport::where('name->en', $sportName)->first();
            if ($sport) {
                Specialty::create([
                    'sport_id'   => $sport->id,
                    'name'       => $specialty[1],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }
    }
}
