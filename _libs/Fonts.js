/**
 Application fonts list
 @class Fonts
 @constructor
 @return {object} instantiated Fonts
 **/
define(['jquery', 'backbone'], function ($, Backbone) {

    Backbone.SERVICES.FONTS_LIST = 'FontsList';

    var Fonts = Backbone.StackView.Fader.extend({

        /**
         Constructor
         @method initialize
         **/
        initialize: function () {
            window.WebFontConfig = {
                google: { families: [ 'Roboto:latin,Ribeye::latin', 'Lora::latin', 'Croissant+One::latin', 'Emblema+One::latin', 'Graduate::latin', 'Hammersmith+One::latin', 'Oswald::latin', 'Oxygen::latin', 'Krona+One::latin', 'Indie+Flower::latin', 'Courgette::latin', 'Ranchers::latin' ] }
            };
            this.m_fonts = 'Roboto,Graduate,Ribeye,Lora,Indie+Flowe,Croissant+One,Hammersmith+One,Oxygen,Fatty,Relief,Luxo,Qurve,Nite,CordiaUPC,SlimFast AH,Informal Roman,Old English Text MT,Juice ITC,Cheetah,RemiHead,Maiandra GD,Tangerine XCn,Rosegarden,Rivanna,Jokerman,Lab Bats,GeoBats,Baskerville Old Face,Swollen,Deftone Stylus,Suske & Wiske,Babe Bamboo,Fat,Tannenberg Fett,Sansation,Magdalena,Jamiro,HanWangMingLight,Marfhaus,Verdana,Lefferts Corners  2,Star Dust Condensed,city burn night after night and,Rx-FiveOne,Hallisey,Impossible - 500,Sniff,IGaramond,Royal Pain,Simplified Arabic,Cassatta Zig,Rub This!,Quartermain Condensed,Milkfresh,Revel,Ground Zero,Scramble,gogoâ€¢squat,Raveflire 2.0,Yellowjacket Rotate,Californian FB,Goudy Old Style,Hammer,Letter Set C,LetterGotLBol,KodchiangUPC,Zhang QA,IcedEarth,FeltMark,Irezumi,Lois Ann,Stencil,Zone23_Dreamtime 923,Yellowjacket Expanded,Jangly Bounce,Scary Monsters,Smilly,Footlight MT Light,Rambo Killer ,ILL oMen,Engravers MT,I Want My TTR!,SF Archery Black SC,Starburst,Humeur,Bandit,Sanguinaryâ„¢,Lilith,Smiley,Ridicule,MT Extra,Franklin Gothic Medium Cond,Oblivious font,Mattbats,Lowtech,Magehunter,Broadway,Hall Fetica,OCR-A BT,Berlin Sans FB,Luftwaffe,Xolto,Switching and Effects,Scriptina,QTHowardTypeFat,Snap ITC,Harlow Solid Italic,ROCKY AOE,Re-buried,Gigi,Backslide,Umpyre,Horley Old Style MT,Bubble 1,Latha,Joe,Radiated Pancake,Kartika,Zebra Parade,Cooper Black,Lewis F. Day 191,Many moods of Moe,Nameless Harbor,Blade Runner Movie Font,Year 2000 Replicant,RoteFlora,Sylfaen,Outer Limits Solid,Britannic Bold,ReskaGraf,M,Vivienne,Libritabs,YrBkMess,So Extended,Rockwell Extra Bold,Seeing Stars,Space Gimboid,Jerk,Kid Kosmic,Patriot,Junegull,Lifetime,Samba is Dead,Real Horror Show,Sagittarius,Sand,LTInagur,Fanatika One,Univers,Lindas Lament,VTC Lo-Down,LiddieBlack,Rivalry,Electroharmonix,RobinsHand,Franklin Gothic Medium,Wingdings 2,Jeff-Chris,Mars Police,Narkisim,Rep,K.P. Duty Overtime JL,Airmole,Symbol Set SWA,BeachType,STFangsong,Lower-WestSide,STXihei,Nouveau,Mikey Jax,Rogue Hero Condensed,Cream and sugar,Edwardian Script ITC,Tw Cen MT Condensed,JustSmashing,RubaiyatEngraved,David,Copperplate Gothic Light,Verticalization,Rocket YoYo,Vladimir Script,Shoestore,SteveHandwriting,Oconnor,Tw Cen MT Condensed Extra Bold,Zachary Hanson,7 days,HanWangMingHeavy,Koffee,Bernard MT Condensed,Astron Boy Video,ParisMetro,Gill Sans MT,Calibri,Year 3000 Pro,NuevoLitho,Tattoo No1,Nebraska,Mael,Stranded (BRK),CaligulaDodgy,YouYuan,y.n.w.u.a.y,Z machine (sRB),Regal box,SidTheSpider,Saltire,QUAKE,Industrial,Poor Richard,Sujeta Outline,HammerheadOutline,Curlz MT,Occasion DB,Regular,Elbjorg,Pristina,Papyrus,Omicron Zeta Slant,Bodoni MT Black,Martel,Wingdings 3,Makisupa,QTKung-Fu,TANTOR,CHICASyMUJERES,Dead Alive,Bodoni MT Condensed,Simplified Arabic Fixed,Vitamin,IkonWrite,Ruach LET,QuickExpress,Marlo,Rogue Hero Laser,HanWangMingMediumChuIn,Swirl,Lizzard,JackRoman,Skull Capz (BRK),Butterflies,Boomerang,David Transparent,STLiti,RRHeralds,Stephen,Eras Bold ITC,Raptor Attack,Jerkoff,Undercover,Love Letters,Scroll,International Super Hero Exp,National First Font,7th Service Condensed,Joint,Qurve Hollow,Birds of a Feather,XBAND Rough,Walrod,Arial Black,SinaloaIniD,Miserable,T,Maharlika,Rundfunk,Realpolitik,NimbusSanPCon,MS Reference Specialty,November,Japanette DB,Gill Sans Ultra Bold,Regulators Condensed,Bodoni MT Poster Compressed,RollingStone,Swinkydad,Arial Rounded MT Bold,u27fog,Stiletto,Kantor Ligatures,Hollywood,NuWave,WarnSymbols1,GiantTigers,NEOLITH,SimHei,Geometr415 Md BT,Bell MT,Judge,MandarinSCD,STKaiti,Sam is my Name,SF Arch Rival Extended,Rod Transparent,Qurve Thin,Centaur,SF Comic Script,Rupee,Rat Man Bane,Myopia,Karloff,Onyx,MammaGamma,Quiet Infinity,Xeroprint,Alba Super,Kunstler Script,Imprint MT Shadow,Lucida Sans,Rage Italic,Rubberneck,Night Court,Franklin Gothic Heavy,Shipper,Y2K Analog Legacy,Robokid,voxBOX,StickAroundForJoy,Gloucester MT Extra Condensed,Gas Huffer Phat,Shotgun BT,Xomic,Century,FZ JAZZY 12 CRACKED,Monsters Attack!,Vipnagorgialla,JackCondensed,Ultra,Machiavelli,Symbol,HamburgerHeaven,Dark Horse,Feuerfeste,Wide Latin,Matura MT Script Capitals,SandCastles,SF Chaerilidae,EucrosiaUPC,Oregon,Eras Light ITC,SkaterDudes,Nails,Machine-gun,Mixed up,WallStreet,MarlonDB,Ramose,Kaptain Toupe,Scroonge,Rage Italic LET,I hate Comic Sans,pills are good,Vixar ASCI,Revel Light,Rocket Type Condensed,wmtrees1,Occoluchi Italic,NobbiGConDB,French Script MT,LTColibri,YellowSubmarine,Y2K Neophyte,MS Mincho,MV Boli,Bookshelf Symbol 7,ResbalosoSlippingA,Royal box,Zymbols,Sci Fied 2002 Ultra,Arial,Spit Shine,Trebuchet MS,SILDoulos IPA93,Subeve,HanWangYenHeavy,Fixed Miriam Transparent,Andalus,SpitCurl,Stab Wound,Zero Gravity,Blackadder ITC,Felix Titling,Road Hoe,Haettenschweiler,RobleRoundedSCapsSSK,Hammerhead,Microsoft JhengHei,Ruban Dismoi Tryout,Eras Medium ITC,STZhongsong,Vrinda,Qurve Wide,Miriam,Modern No. 20,KabanaBold,Rock Star,Randi,Palatino Linotype,MotterFemD,Wingdings,Gill Sans Ultra Bold Condensed,naked monk,Courier New,Ren & Stimpy,RANXEROX,StrokeyBacon,Ogilvie,Zinc Boomerang,Scritzy,Science Project,Blue Highway Linocut,LifeT,Numskull (BRK),Swirled (BRK),SexyMF,MarionsHand,HanWangHeiLight,Kristen ITC,Masterforce Solid,Bradley Hand ITC,Magic:the Gathering,Vivaldi,HarlowD,Native Alien Extended,Gill Sans MT Condensed,Chow Fun,Tanline,Sakkal Majalla,Nina,Xephyr Italic,Luteous Industrious,Saffron,SF Chrome Fenders Extended,Linoleum,Franklin Gothic Demi,Impact,Logan,Raavi,STXingkai,Marathon II,Marburg DB,Revue BT,Algerian,Reactivare,BrowalliaUPC,Ravie,W.J. Pearce hollow,Tempus Sans ITC,Niagara Engraved,STXinwei,LTSicula,Quinquefoliolate,Anhedonia,Salter,Nuance,Good Head,SpeedballNo2SW,Reticulum 3,Swiss911 XCm BT,Takeout,Lucida Console,WeInside,RoselleCapsSSK,Lucida Sans Unicode,Quadrangle,Impossibilium (BRK),QuotaBlack DB,Neuropolitical,HanWangYenLight,Nonstop [italic],Samson Light Oblique,Geeves,Shruti,VIPER NORA,Nauvoo,MS Reference Sans Serif,Yellow Dog,ResPublica,Webdings,RuttenSpya,Constantia,Zamboni Joe Expanded,JaggaPoint,OCEAN,Liquidism part 2,Volt,QTHowardType,Raketta From Mars,STCaiyun,Agency FB,Goudy Stout,Raleigh Md BT,HanWangHeiHeavy,SF Cartoonist Hand,Groovalicious Tweak,Macedo,SF Theramin Gothic Condensed,Bauhaus 93,NudE,KabinConMedDB,GhostBayou,Vox-Slanted,Franklin Gothic Book,Justinian,STSong,Under attack skew,Electric Pickle,u26fog,stillframes,Freestyle Script,Bearpaw,Hot Rod Gang BV,HoratioDMed,MS Outlook,Napapiiri,Mistral,Back to Bay 6,KidTYPEPaint,Elephant,HanWangYanKai,Alba,Estrangelo Edessa,Xefus,Macaroni,Warlords,Script MT Bold,Arabic Transparent,VA Pe DB,Eight Track program 3,JackInput,Microsoft Sans Serif,VTC NightOfTheDeadCorruptCaps,Hacknslash,Sad Jane,Retsuc,NimbusSanTLig,Rokford,Iphegeniaâ„¢,Nine Lives,Office,Noel,Nestor,Rose,Gill Sans MT Ext Condensed Bold,Showcard Gothic,After Shok,WaldauDB,Franklin Gothic Demi Cond,Ghouly Solid,Notation Heavy JL,Reynard Demo,screenfox9,Faktos-Mirror,Random Voter,Tanne DB,Copperplate Gothic Bold,Nebullium,GF Ordner Normal,Umbles,Forte,UNCONFORM,Qirof,Nocker,Off Kilter R (BRK),OCR A Extended,SURROUNDED large,Starlight Sans JL,Radonator Anorexia,Gilgongo Doro,District,SF Collegiate Solid,Pastor of Muppets,Gautami,LTAfroculture,Unionform,Rubber Walls,KoffeeDBol,Mangal,ScrewedSW,samarin,Rod,Cordia New,Mad scientist,Serifa Blk BT,RaveParty Hollow,National Primary,Warp 1,Intrepid ExtraBold,Parchment,Belphebe,QTOptimum,Taskeksem inflamerat,Ronda,Bookman Old Style,Castellar,Viner Hand ITC,Pussycat,Myriad Web Pro,Flower Ornaments,High Tower Text,Playbill,Chiller,Comic Sans MS,Neil,Garamond,Tarnished Halo,Misconstrued,Ghostmeat,LiquidCrystal,Riquoth,STHupo,Brush Script MT,Berthside,Yesterday DB,Insane Hours,neo-geo,Colonna MT,Oakland,Miriam Transparent,Mexacali,FrankRuehl,Edmunds,Old Oak,YanksHand,Tunga,Lunch time,Carbon Block,KabanaBook,Narcosis,Something Fishy,Xenowort,Rockwell,Niagara Solid,Independence,Split splat splodge,Rainy Days,Quorum Md BT,SKULL TS 2,Kabel,Hallandale Deco Bd It. Smc JL,Odd Dog,Marquee Moon,HanWangFangSongMedium,Harrington,Wait And Bleed,GENUINE,Notepad,Intramural JL,Arabic Typesetting,DFKai-SB,Nife Fiter,Xacto Blade,AngsanaUPC,Narcotix,Miriam Fixed,Splendid 66,SF Eccentric Opus,Dead World,Faktosas-Slanted,RoundestLH,Eras Demi ITC,Xmas 97,Still Time'.split(',');
        },

        getFonts: function(){
            return this.m_fonts;
        }
    });

    return Fonts;
});