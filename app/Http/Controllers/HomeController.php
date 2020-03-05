<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use App\Models\Iframe;
use App\Models\Rule;
use App\Models\Game;
use App\Models\Statistic;
use App\Models\Pagesetting;

class HomeController extends Controller
{

    private $news;
    private $iframes;
    private $rules;
    private $games;
    private $stats;
    private $pagesettings;

    public function __construct(News $news, Iframe $iframes, Rule $rules, Game $games, Statistic $stats, Pagesetting $pagesettings)
    {

        $this->news = $news;
        $this->iframes = $iframes;
        $this->rules = $rules;
        $this->games = $games;
        $this->stats = $stats;
        $this->pagesettings = $pagesettings;
    }

    public function index()
    {
        //$news = $this->news->first();
        //return view('index', compact('news'));
        $news = News::all();
        $iframes = Iframe::all();
        $rules = Rule::all();
        $games = Game::all();
        $stats = Statistic::all();
        $pagesettings = Pagesetting::all();

        $aboutus = '';
        $contactus = '';
        $copyright = '';

        foreach ($pagesettings as $ps) {
            switch ($ps->type) {
                case 'aboutus';
                    $aboutus = $ps->text;
                    break;
                case 'contactus';
                    $contactus = $ps->text;
                    break;
                case 'copyright';
                    $copyright = $ps->text;
                    break;
                case 'sdf';
                    break;
                case 'sdf1';
                    break;
                case 'sdf2';
                    break;
                default:
            }
        }

        return view('home', compact('news', 'iframes', 'rules', 'games', 'stats', 'aboutus', 'contactus', 'copyright'));
        //return view('index');
    }
}
