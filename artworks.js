/* =============================================
   grATTitude — Daily Artwork Collection
   =============================================
   Curated public-domain masterworks from the
   Art Institute of Chicago. One painting per day,
   selected for contemplative, peaceful, and
   beautiful imagery.

   Images served via IIIF:
   https://www.artic.edu/iiif/2/{image_id}/full/{width},/0/default.jpg

   All works are public domain (CC0).
   ============================================= */

const ARTWORKS = [

    // ── Impressionist Landscapes ──────────────────────

    { id: 64818, image_id: "a38e2828-ec6f-ece1-a30f-70243449197b", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg",
      title: "Stacks of Wheat (End of Summer)", artist: "Claude Monet", date: "1890\u201391",
      alt: "Golden wheat stacks casting long shadows across a sunlit field" },

    { id: 14624, image_id: "4c364c64-2108-4e19-5fc5-1ab26ba924a7", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Day%2C_Autumn%29_-_1933.444_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Day%2C_Autumn%29_-_1933.444_-_Art_Institute_of_Chicago.jpg",
      title: "Stacks of Wheat (End of Day, Autumn)", artist: "Claude Monet", date: "1890\u201391",
      alt: "Wheat stacks glowing warmly in the fading autumn light" },

    { id: 100191, image_id: "8bd40b36-43ea-8b02-d76a-b325962b86db", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Claude_Monet_-_Stack_of_Wheat_%28Thaw%2C_Sunset%29_-_1983.166_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Stack_of_Wheat_%28Thaw%2C_Sunset%29_-_1983.166_-_Art_Institute_of_Chicago.jpg",
      title: "Stack of Wheat (Thaw, Sunset)", artist: "Claude Monet", date: "1890\u201391",
      alt: "A wheat stack at sunset with warm reflected colours across thawing snow" },

    { id: 81545, image_id: "be0d3e50-a600-6f33-ea8f-16a34d892442", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Claude_Monet_-_Stacks_of_Wheat_%28Sunset%2C_Snow_Effect%29_-_1922.431_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Stacks_of_Wheat_%28Sunset%2C_Snow_Effect%29_-_1922.431_-_Art_Institute_of_Chicago.jpg",
      title: "Stacks of Wheat (Sunset, Snow Effect)", artist: "Claude Monet", date: "1890\u201391",
      alt: "Two snowy haystacks bathed in soft sunset light" },

    { id: 16560, image_id: "db36f74f-47d9-ad08-cdf9-b4b436e6d18c", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Claude_Monet_-_Stack_of_Wheat_%28Snow_Effect%2C_Overcast_Day%29_-_1933.1155_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Stack_of_Wheat_%28Snow_Effect%2C_Overcast_Day%29_-_1933.1155_-_Art_Institute_of_Chicago.jpg",
      title: "Stack of Wheat (Snow Effect, Overcast Day)", artist: "Claude Monet", date: "1890\u201391",
      alt: "A shadowed wheat stack standing quietly on a snowy, overcast field" },

    { id: 111318, image_id: "27c1d720-8ca5-79a4-5e51-530bf75c1591", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg",
      title: "Stack of Wheat", artist: "Claude Monet", date: "1890\u201391",
      alt: "Snow-dusted haystack in cool blue and lavender tones" },

    { id: 186316, image_id: "b7c3fa7f-d2bd-27b6-4a5c-0c8943d2b944", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg",
      title: "Stacks of Wheat", artist: "Claude Monet", date: "1891",
      alt: "Wheat stacks in a golden field under a hazy sky" },

    { id: 4783, image_id: "db94c894-a24c-c2e0-9db9-0506567a0152", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Claude_Monet_-_Poppy_Field_%28Giverny%29_-_1922.4465_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Poppy_Field_%28Giverny%29_-_1922.4465_-_Art_Institute_of_Chicago.jpg",
      title: "Poppy Field (Giverny)", artist: "Claude Monet", date: "1890\u201391",
      alt: "A vibrant field of red poppies under a bright sky at Giverny" },

    { id: 81537, image_id: "4d1b3ad0-14db-0d21-ad9f-17abb8bdfbb5", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Monet_-_Bordighera_-_Art_Institute_of_Chicago_1922.426.jpg/1920px-Monet_-_Bordighera_-_Art_Institute_of_Chicago_1922.426.jpg",
      title: "Bordighera", artist: "Claude Monet", date: "1884",
      alt: "Bright Mediterranean landscape with lush trees and distant sea" },

    { id: 16554, image_id: "7d533ed4-ff54-fa2c-64f4-2b16bfbb5880", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Claude_Monet_-_The_Artist%27s_House_at_Argenteuil_-_1933.1153_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_The_Artist%27s_House_at_Argenteuil_-_1933.1153_-_Art_Institute_of_Chicago.jpg",
      title: "The Artist\u2019s House at Argenteuil", artist: "Claude Monet", date: "1873",
      alt: "A charming house surrounded by a sunlit garden in full bloom" },

    { id: 16564, image_id: "838d8c33-a3b4-68ea-587b-87ceec2011af", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Monet_-_Branch_of_the_Seine_near_Giverny_%28Mist%29%2C_from_the_series_%E2%80%9CMornings_on_the_Seine%E2%80%9D%2C_1897.jpg/1920px-Monet_-_Branch_of_the_Seine_near_Giverny_%28Mist%29%2C_from_the_series_%E2%80%9CMornings_on_the_Seine%E2%80%9D%2C_1897.jpg",
      title: "Branch of the Seine near Giverny (Mist)", artist: "Claude Monet", date: "1897",
      alt: "Misty morning along the Seine, soft reflections on still water" },

    { id: 81539, image_id: "66f95ea3-a11a-1cf4-6599-d0a49bb25744", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Claude_Monet_-_On_the_Bank_of_the_Seine%2C_Bennecourt_-_1922.427_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_On_the_Bank_of_the_Seine%2C_Bennecourt_-_1922.427_-_Art_Institute_of_Chicago.jpg",
      title: "On the Bank of the Seine, Bennecourt", artist: "Claude Monet", date: "1868",
      alt: "A figure seated on a riverbank gazing across calm water to a sunlit village" },

    { id: 81546, image_id: "ec1f6262-09c2-8f7e-baa9-9c0b267337ff", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Monet_-_The_Petite_Creuse_River%2C_1889.jpg/1920px-Monet_-_The_Petite_Creuse_River%2C_1889.jpg",
      title: "The Petite Creuse River", artist: "Claude Monet", date: "1889",
      alt: "A winding river through a rugged valley in rich green and gold tones" },

    { id: 14634, image_id: "d39b1026-7d8d-6e6a-738e-8a136b1a0033", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/V%C3%A9theuil_%281901%29_Claude_Monet_-_Art_Institute_of_Chicago_inv_1933.447_%28W1643%29.jpg/1920px-V%C3%A9theuil_%281901%29_Claude_Monet_-_Art_Institute_of_Chicago_inv_1933.447_%28W1643%29.jpg",
      title: "V\u00e9theuil", artist: "Claude Monet", date: "1901",
      alt: "The village of V\u00e9theuil reflected in the calm river below" },

    { id: 16579, image_id: "5a487230-6002-45a7-08c4-b2198a2a2c60", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/V%C3%A9theuil_%281901%29_Claude_Monet_-_Art_Institute_of_Chicago_inv_1933.447_%28W1643%29.jpg/1920px-V%C3%A9theuil_%281901%29_Claude_Monet_-_Art_Institute_of_Chicago_inv_1933.447_%28W1643%29.jpg",
      title: "V\u00e9theuil", artist: "Claude Monet", date: "1901",
      alt: "Soft afternoon light over the village of V\u00e9theuil on the Seine" },

    { id: 86998, image_id: "07d8dd31-d44b-85aa-ab09-ca51ee86f631", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Claude_Monet_-_Sandvika%2C_Norway_1895_%2815616908772%29.jpg/1920px-Claude_Monet_-_Sandvika%2C_Norway_1895_%2815616908772%29.jpg",
      title: "Sandvika, Norway", artist: "Claude Monet", date: "1895",
      alt: "A snow-covered Norwegian landscape with soft winter light" },

    { id: 16542, image_id: "2b30e687-4526-f487-cedc-448b3188fd19", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Monet_-_The_Customs_House_at_Varengeville%2C_1897.jpg/1920px-Monet_-_The_Customs_House_at_Varengeville%2C_1897.jpg",
      title: "The Customs House at Varengeville", artist: "Claude Monet", date: "1897",
      alt: "A clifftop customs house overlooking a vast, calm sea" },

    // ── Water & Reflections ──────────────────────────

    { id: 16568, image_id: "3c27b499-af56-f0d5-93b5-a7f2f1ad5813", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Claude_Monet_-_Water_Lily_Pond_-_1933.441_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Water_Lily_Pond_-_1933.441_-_Art_Institute_of_Chicago.jpg",
      title: "Water Lilies", artist: "Claude Monet", date: "1906",
      alt: "Luminous water lilies floating on a pond of shimmering reflections" },

    { id: 87088, image_id: "8534685d-1102-e1e3-e194-94f6e925e8b0", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Claude_Monet_-_Water_Lily_Pond_-_1933.441_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Water_Lily_Pond_-_1933.441_-_Art_Institute_of_Chicago.jpg",
      title: "Water Lily Pond", artist: "Claude Monet", date: "1900",
      alt: "The Japanese bridge arching over Monet\u2019s water lily pond" },

    { id: 97933, image_id: "7a23ad22-2044-6d7d-6315-9b101dadc559", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Claude_Monet_-_Water_Lily_Pond_-_1933.441_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Water_Lily_Pond_-_1933.441_-_Art_Institute_of_Chicago.jpg",
      title: "Water Lily Pond", artist: "Claude Monet", date: "1917\u201319",
      alt: "An immersive view of water lilies in soft blues and greens" },

    { id: 4887, image_id: "1f925e43-ff81-5ad7-da75-b28ea651c09f", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Monet_-_Irises%2C_1914-17%2C_1956.1202.jpg/1920px-Monet_-_Irises%2C_1914-17%2C_1956.1202.jpg",
      title: "Irises", artist: "Claude Monet", date: "1914\u201317",
      alt: "A lush garden of purple irises in dappled light" },

    // ── Seascapes ────────────────────────────────────

    { id: 81535, image_id: "8be90e71-83c3-3f98-a972-4acb9ce0e773", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/%C3%89douard_Manet_-_Steamboat_Leaving_Boulogne_-_1922.425_-_Art_Institute_of_Chicago_%28cropped%29.jpg/1920px-%C3%89douard_Manet_-_Steamboat_Leaving_Boulogne_-_1922.425_-_Art_Institute_of_Chicago_%28cropped%29.jpg",
      title: "Sea View, Calm Weather", artist: "\u00c9douard Manet", date: "1864",
      alt: "A tranquil seascape with sailboats on calm, open water" },

    { id: 14620, image_id: "b0effb1c-ff23-bbaa-f809-9fd94e31c1a0", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_-_Cliff_Walk_at_Pourville_-_Google_Art_Project.jpg/1920px-Claude_Monet_-_Cliff_Walk_at_Pourville_-_Google_Art_Project.jpg",
      title: "Cliff Walk at Pourville", artist: "Claude Monet", date: "1882",
      alt: "Two figures walking along grassy cliffs above a sparkling sea" },

    { id: 14598, image_id: "95be2572-b53d-8e7b-abc9-10eb48d4fa5d", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Claude_Monet_-_The_Beach_at_Sainte-Adresse_-_Google_Art_Project.jpg/1920px-Claude_Monet_-_The_Beach_at_Sainte-Adresse_-_Google_Art_Project.jpg",
      title: "The Beach at Sainte-Adresse", artist: "Claude Monet", date: "1867",
      alt: "Fishing boats pulled onto a beach with sailboats on the horizon" },

    { id: 81557, image_id: "caf4fa39-e2e8-344a-542c-2d9a03ec9d4b", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Pierre-Auguste_Renoir_-_Seascape_-_1922.438_-_Art_Institute_of_Chicago.jpg/1920px-Pierre-Auguste_Renoir_-_Seascape_-_1922.438_-_Art_Institute_of_Chicago.jpg",
      title: "Seascape", artist: "Pierre-Auguste Renoir", date: "1879",
      alt: "Soft, luminous seascape with gentle waves in warm tones" },

    { id: 59927, image_id: "eaf98472-70cc-0005-c2c9-6109f549f24a", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Claude_Monet_-_Boats_on_the_Beach_at_%C3%89tretat_-_1947.95_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Boats_on_the_Beach_at_%C3%89tretat_-_1947.95_-_Art_Institute_of_Chicago.jpg",
      title: "Boats on the Beach at \u00c9tretat", artist: "Claude Monet", date: "1885",
      alt: "Colourful fishing boats resting on a pebbly beach beneath chalk cliffs" },

    { id: 14630, image_id: "64c38f6d-f0d5-b553-a27e-3552550f351a", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Monet_-_Venice%2C_Palazzo_Dario%2C_1908.jpg/1920px-Monet_-_Venice%2C_Palazzo_Dario%2C_1908.jpg",
      title: "Venice, Palazzo Dario", artist: "Claude Monet", date: "1908",
      alt: "A Venetian palazzo reflected in shimmering canal water" },

    { id: 24253, image_id: "7da4f71b-2c4f-1bc3-dd44-10b2ee7ee30f", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Catalogues_of_exhibitions_%28IA_cataloguesofexhi02copl%29.pdf/page1-500px-Catalogues_of_exhibitions_%28IA_cataloguesofexhi02copl%29.pdf.jpg",
      title: "Seascape with Boats", artist: "Eug\u00e8ne Louis Boudin", date: "1898",
      alt: "Sailboats on a calm sea beneath a vast, cloud-filled sky" },

    { id: 126486, image_id: "f901a0c3-bca4-46fb-6c4d-4d91dbd8a29e", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Catalogue_winter_exhibition_%28IA_cataloguewintere1923nati%29.pdf/page1-500px-Catalogue_winter_exhibition_%28IA_cataloguewintere1923nati%29.pdf.jpg",
      title: "Seascape, Normandy", artist: "Gustave Le Gray", date: "1856/57",
      alt: "Dramatic clouds over a calm Normandy coast, early photography" },

    { id: 126485, image_id: "03911f46-250d-79f7-5cbb-37cfabc37c09", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gustave_Le_Gray_-_Cloudy_Sky%2C_Mediterranean_Sea_-_Google_Art_Project.jpg/1920px-Gustave_Le_Gray_-_Cloudy_Sky%2C_Mediterranean_Sea_-_Google_Art_Project.jpg",
      title: "Cloudy Sky, Mediterranean Sea", artist: "Gustave Le Gray", date: "1857",
      alt: "Billowing clouds above a serene Mediterranean horizon" },

    { id: 16343, image_id: "b246d3eb-8bfe-a031-4848-e00c053546ea", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Jan_van_de_Cappelle_-_Fishing_Boats_in_a_Calm_-_1933.1068_-_Art_Institute_of_Chicago.jpg/1920px-Jan_van_de_Cappelle_-_Fishing_Boats_in_a_Calm_-_1933.1068_-_Art_Institute_of_Chicago.jpg",
      title: "Fishing Boats in a Calm", artist: "Jan van de Cappelle", date: "1651",
      alt: "Golden-toned Dutch sailing vessels on glassy, still water" },

    // ── Bridges & Rivers ─────────────────────────────

    { id: 16584, image_id: "03930df3-1e6c-eeca-8660-c0b22ca477ff", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Claude_Monet%2C_Houses_of_Parliament%2C_London%2C_1900-1903%2C_1933.1164%2C_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet%2C_Houses_of_Parliament%2C_London%2C_1900-1903%2C_1933.1164%2C_Art_Institute_of_Chicago.jpg",
      title: "Houses of Parliament, London", artist: "Claude Monet", date: "1900\u201301",
      alt: "The Houses of Parliament veiled in atmospheric fog over the Thames" },

    { id: 103139, image_id: "6f61a6fc-dcd8-e801-0ad8-5f7e561d91b6", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Monet_-_Waterloo_Bridge%2C_Gray_Weather%2C_1900.jpg/1920px-Monet_-_Waterloo_Bridge%2C_Gray_Weather%2C_1900.jpg",
      title: "Waterloo Bridge, Gray Weather", artist: "Claude Monet", date: "1900",
      alt: "Waterloo Bridge emerging through soft grey London fog" },

    { id: 20701, image_id: "827d02ef-6765-9728-c07e-52ad22b73fd3", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Monet_-_Waterloo_Bridge%2C_Sunlight_Effect%2C_1903.jpg/1920px-Monet_-_Waterloo_Bridge%2C_Sunlight_Effect%2C_1903.jpg",
      title: "Waterloo Bridge, Sunlight Effect", artist: "Claude Monet", date: "1903",
      alt: "Waterloo Bridge glowing in warm sunlight with shimmering reflections" },

    { id: 73054, image_id: "bcc9c3a7-f5b0-41af-210a-bd17797d77d9", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Alfred_Sisley_-_The_Loire_-_1988.504_-_Art_Institute_of_Chicago.jpg/1920px-Alfred_Sisley_-_The_Loire_-_1988.504_-_Art_Institute_of_Chicago.jpg",
      title: "The Loire", artist: "Alfred Sisley", date: "1896",
      alt: "The Loire river flowing peacefully through the French countryside" },

    { id: 16633, image_id: "c4425cb6-d8b5-6390-603d-7f802406d05d", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Alfred_Sisley_-_The_Seine_at_Port-Marly%2C_Piles_of_Sand_-_1933.1177_-_Art_Institute_of_Chicago.jpg/1920px-Alfred_Sisley_-_The_Seine_at_Port-Marly%2C_Piles_of_Sand_-_1933.1177_-_Art_Institute_of_Chicago.jpg",
      title: "The Seine at Port-Marly, Piles of Sand", artist: "Alfred Sisley", date: "1875",
      alt: "A quiet stretch of the Seine with sand piles on the bank" },

    { id: 37741, image_id: "ed7aa098-e5c9-04dd-b09c-3416d1c56854", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Alfred_Sisley_-_Watering_Place_at_Marly_-_1971.875_-_Art_Institute_of_Chicago.jpg/1920px-Alfred_Sisley_-_Watering_Place_at_Marly_-_1971.875_-_Art_Institute_of_Chicago.jpg",
      title: "Watering Place at Marly", artist: "Alfred Sisley", date: "1875",
      alt: "Horses and figures at a peaceful riverside watering place" },

    { id: 58984, image_id: "2bcffdac-951e-569f-8f05-f4c8e4228302", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Alfred_Sisley_-_Landscape_along_the_Seine_with_the_Institut_de_France_and_the_Pont_des_Arts_-_1979.1030_-_Art_Institute_of_Chicago.jpg/1920px-Alfred_Sisley_-_Landscape_along_the_Seine_with_the_Institut_de_France_and_the_Pont_des_Arts_-_1979.1030_-_Art_Institute_of_Chicago.jpg",
      title: "Landscape along the Seine with Institut", artist: "Alfred Sisley", date: "c. 1875",
      alt: "A gentle view along the Seine with the Institut de France in the distance" },

    { id: 96559, image_id: "0f076222-52b2-9bb4-4409-72fdf485d895", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Alfred_Sisley_-_A_Turn_in_the_Road_-_1947.112_-_Art_Institute_of_Chicago.jpg/1920px-Alfred_Sisley_-_A_Turn_in_the_Road_-_1947.112_-_Art_Institute_of_Chicago.jpg",
      title: "A Turn in the Road", artist: "Alfred Sisley", date: "1873",
      alt: "A winding country road bordered by trees under a clear sky" },

    { id: 109314, image_id: "5512cee9-6d00-d01b-b0be-ac7843cc8f76", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Vincent_van_Gogh_-_Fishing_in_Spring%2C_the_Pont_de_Clichy_%28Asni%C3%A8res%29_-_1965.1169_-_Art_Institute_of_Chicago.jpg/1920px-Vincent_van_Gogh_-_Fishing_in_Spring%2C_the_Pont_de_Clichy_%28Asni%C3%A8res%29_-_1965.1169_-_Art_Institute_of_Chicago.jpg",
      title: "Fishing in Spring, the Pont de Clichy (Asni\u00e8res)", artist: "Vincent van Gogh", date: "1887",
      alt: "Springtime fishing scene by a bridge with blossoming trees" },

    // ── Pastoral & Countryside ───────────────────────

    { id: 94841, image_id: "48b2de88-ba73-8e19-f448-d1cef4a1c847", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Art_Institute_Of_Chicago%2C_Song_Of_The_Lark%2C_Breton_%28NBY_415228%29.jpg",
      title: "The Song of the Lark", artist: "Jules Breton", date: "1884",
      alt: "A young woman pausing in a golden field at dawn, listening to a lark\u2019s song" },

    { id: 87000, image_id: "b84a9755-ca8d-8bd5-5a59-e910b20e3ba5", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Camille_Pissarro%2C_Haymaking_at_%C3%89ragny%2C_1892%2C_1961.791%2C_Art_Institute_of_Chicago.jpg/1920px-Camille_Pissarro%2C_Haymaking_at_%C3%89ragny%2C_1892%2C_1961.791%2C_Art_Institute_of_Chicago.jpg",
      title: "Haymaking at \u00c9ragny", artist: "Camille Pissarro", date: "1892",
      alt: "Farmers gathering hay in a sun-dappled meadow" },

    { id: 138, image_id: "e72305c9-1a1c-8a36-7450-582619366338", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/George_Hitchcock_-_Flower_Girl_in_Holland_-_1888.169_-_Art_Institute_of_Chicago.jpg/1920px-George_Hitchcock_-_Flower_Girl_in_Holland_-_1888.169_-_Art_Institute_of_Chicago.jpg",
      title: "Flower Girl in Holland", artist: "George Hitchcock", date: "1887",
      alt: "A woman standing in a luminous field of flowers in the Dutch countryside" },

    { id: 897, image_id: "5ae91cbf-66c5-cf9b-f355-629e458cb063", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Constant_Troyon_-_Pasture_in_Normandy_-_1894.1069_-_Art_Institute_of_Chicago.jpg/1920px-Constant_Troyon_-_Pasture_in_Normandy_-_1894.1069_-_Art_Institute_of_Chicago.jpg",
      title: "Pasture in Normandy", artist: "Constant Troyon", date: "1852",
      alt: "Cattle grazing peacefully in a lush Norman pasture" },

    { id: 894, image_id: "f5731565-80bd-6d4c-8790-d0c252d92bd4", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Th%C3%A9odore_Rousseau_-_Springtime_-_1894.1066_-_Art_Institute_of_Chicago.jpg/1920px-Th%C3%A9odore_Rousseau_-_Springtime_-_1894.1066_-_Art_Institute_of_Chicago.jpg",
      title: "Springtime", artist: "Th\u00e9odore Rousseau", date: "c. 1860",
      alt: "A warm spring day in the French countryside with budding trees" },

    { id: 893, image_id: "3527f037-a9b2-9253-1a92-dcd281b54340", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Th%C3%A9odore_Rousseau_-_Landscape_-_1894.1065_-_Art_Institute_of_Chicago.jpg/1920px-Th%C3%A9odore_Rousseau_-_Landscape_-_1894.1065_-_Art_Institute_of_Chicago.jpg",
      title: "Landscape", artist: "Th\u00e9odore Rousseau", date: "c. 1850",
      alt: "A tranquil landscape with soft light filtering through trees" },

    { id: 43146, image_id: "f1e67ea1-ec78-01dd-fbf7-00eaebe7ba5f", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Corot_-_Wooded_Countryside%2C_1866%2C_1927.2560.jpg/1920px-Corot_-_Wooded_Countryside%2C_1866%2C_1927.2560.jpg",
      title: "Wooded Countryside", artist: "Jean Baptiste Camille Corot", date: "1866",
      alt: "A peaceful wooded scene with gentle, diffused light" },

    { id: 4776, image_id: "0ace29f2-7bc1-714a-c364-12b57bcf8a93", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Catalog_of_the_art_collection_of_T.B._Walker_%28IA_catalogofartcoll00unse%29.pdf/page1-500px-Catalog_of_the_art_collection_of_T.B._Walker_%28IA_catalogofartcoll00unse%29.pdf.jpg",
      title: "The Keeper of the Flock", artist: "Jean Fran\u00e7ois Millet", date: "1871\u201374",
      alt: "A shepherd watching over a flock in a quiet, open landscape" },

    { id: 97292, image_id: "0787ea3c-9c03-65a2-adeb-5f5343794324", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Robert_William_Vonnoh_-_Spring_in_France_-_1982.272_-_Art_Institute_of_Chicago.jpg/1920px-Robert_William_Vonnoh_-_Spring_in_France_-_1982.272_-_Art_Institute_of_Chicago.jpg",
      title: "Spring in France", artist: "Robert William Vonnoh", date: "1890",
      alt: "A bright impressionist view of the French countryside in spring" },

    { id: 4758, image_id: "400ce9e8-2f67-44e2-dd68-e6c98880d27f", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/John_Constable_-_Stoke-by-Nayland_-_1922.4453_-_Art_Institute_of_Chicago.jpg/1920px-John_Constable_-_Stoke-by-Nayland_-_1922.4453_-_Art_Institute_of_Chicago.jpg",
      title: "Stoke-by-Nayland", artist: "John Constable", date: "1836",
      alt: "The English countryside with a church tower rising above lush green fields" },

    { id: 39542, image_id: "efdd5540-5579-8761-fd1d-af318f65a0a6", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Rosa_Bonheur_-_Cattle_at_Rest_on_a_Hillside_in_the_Alps_-_1901.451_-_Art_Institute_of_Chicago.jpg/1920px-Rosa_Bonheur_-_Cattle_at_Rest_on_a_Hillside_in_the_Alps_-_1901.451_-_Art_Institute_of_Chicago.jpg",
      title: "Cattle at Rest on a Hillside in the Alps", artist: "Rosa Bonheur", date: "1885",
      alt: "Cattle resting peacefully on green alpine grass with mountain views" },

    // ── Mountains, Forests & Wilderness ──────────────

    { id: 146701, image_id: "d55b0cfc-0716-d6cd-3b38-5742903ce046", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Albert_Bierstadt_-_Mountain_Brook_-_1997.365_-_Art_Institute_of_Chicago.jpg/1920px-Albert_Bierstadt_-_Mountain_Brook_-_1997.365_-_Art_Institute_of_Chicago.jpg",
      title: "Mountain Brook", artist: "Albert Bierstadt", date: "1863",
      alt: "A sunlit forest stream with a gentle waterfall among moss-covered rocks" },

    { id: 90048, image_id: "18092196-50ae-3ff1-9205-1b3110e966c3", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Distant_View_of_Niagara_Falls_1830_Thomas_Cole.jpg/1920px-Distant_View_of_Niagara_Falls_1830_Thomas_Cole.jpg",
      title: "Distant View of Niagara Falls", artist: "Thomas Cole", date: "1830",
      alt: "A vast autumn panorama with Niagara Falls in the distance" },

    { id: 53058, image_id: "bfc9b17a-cc18-7bd3-4d78-e925bb1a8b27", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Berthe_Morisot_-_For%C3%AAt_de_Compi%C3%A8gne_-_1885.jpg/1920px-Berthe_Morisot_-_For%C3%AAt_de_Compi%C3%A8gne_-_1885.jpg",
      title: "For\u00eat de Compi\u00e8gne", artist: "Berthe Morisot", date: "1885",
      alt: "Dappled sunlight filtering through a French forest canopy" },

    { id: 193926, image_id: "b7e9650f-fe31-1206-ec54-8b2f019b8621", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Th%C3%A9odore_Rousseau_-_View_of_Saleve%2C_near_Geneva_-_2008.399_-_Art_Institute_of_Chicago.jpg/1920px-Th%C3%A9odore_Rousseau_-_View_of_Saleve%2C_near_Geneva_-_2008.399_-_Art_Institute_of_Chicago.jpg",
      title: "View of Sal\u00e8ve, near Geneva", artist: "Th\u00e9odore Rousseau", date: "1834",
      alt: "The Sal\u00e8ve mountain rising above the landscape near Geneva" },

    // ── Sunsets, Twilight & Golden Hour ───────────────

    { id: 64740, image_id: "0b66bb30-3170-f7d1-543a-93e02ffe194f", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/George_Inness_-_Landscape%2C_Sunset_-_1911.35_-_Art_Institute_of_Chicago.jpg/1920px-George_Inness_-_Landscape%2C_Sunset_-_1911.35_-_Art_Institute_of_Chicago.jpg",
      title: "Landscape, Sunset", artist: "George Inness", date: "1887\u201389",
      alt: "A glowing sunset over a quiet American landscape" },

    { id: 64715, image_id: "a9546ba5-6191-4e04-e209-d22a10e7d0d7", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/George_Inness_-_After_a_Summer_Shower_-_1911.29_-_Art_Institute_of_Chicago.jpg/1920px-George_Inness_-_After_a_Summer_Shower_-_1911.29_-_Art_Institute_of_Chicago.jpg",
      title: "After a Summer Shower", artist: "George Inness", date: "1894",
      alt: "Fresh light breaking through after rain in a peaceful landscape" },

    { id: 29385, image_id: "5cd5edc1-be1a-486c-9210-468da7668939", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Catalogue_of_paintings_%28IA_catalogueofpaint00metr_0%29.pdf/page1-500px-Catalogue_of_paintings_%28IA_catalogueofpaint00metr_0%29.pdf.jpg",
      title: "Sunset and Moonrise", artist: "Joseph Mallord William Turner", date: "c. 1832",
      alt: "A luminous Turner sky where sunset and moonrise meet" },

    { id: 71971, image_id: "30491751-fb43-fc27-51fe-d068be7b6568", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Sanford_Robinson_Gifford_-_Mist_Rising_at_Sunset_in_the_Catskills_-_1988.217_-_Art_Institute_of_Chicago.jpg/1920px-Sanford_Robinson_Gifford_-_Mist_Rising_at_Sunset_in_the_Catskills_-_1988.217_-_Art_Institute_of_Chicago.jpg",
      title: "Mist Rising at Sunset in the Catskills", artist: "Sanford Robinson Gifford", date: "c. 1861",
      alt: "Golden mist rising through the Catskill Mountains at sunset" },

    { id: 72398, image_id: "ea5875fc-48ab-037d-3eec-86ccf6e9be60", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Sanford_Robinson_Gifford_-_Cows_in_a_Pond_at_Sunset_-_1988.317_-_Art_Institute_of_Chicago.jpg/1920px-Sanford_Robinson_Gifford_-_Cows_in_a_Pond_at_Sunset_-_1988.317_-_Art_Institute_of_Chicago.jpg",
      title: "Cows in a Pond at Sunset", artist: "Sanford Robinson Gifford", date: "1860",
      alt: "Cows wading in a pond as warm sunset light fills the sky" },

    { id: 58576, image_id: "13929657-1c8f-be57-4ea6-3aed6411a733", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pissarro_-_Twilight_with_Haystacks%2C_1979.650.jpg/1920px-Pissarro_-_Twilight_with_Haystacks%2C_1979.650.jpg",
      title: "Twilight with Haystacks", artist: "Camille Pissarro", date: "1879",
      alt: "Haystacks silhouetted against a dusky twilight sky" },

    { id: 56905, image_id: "50034c7f-ce51-00f1-430e-a6f7efc233fc", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/James_McNeill_Whistler_-_Nocturne%2C_Blue_and_Gold%E2%80%94Southampton_Water_-_1900.52_-_Art_Institute_of_Chicago.jpg/1920px-James_McNeill_Whistler_-_Nocturne%2C_Blue_and_Gold%E2%80%94Southampton_Water_-_1900.52_-_Art_Institute_of_Chicago.jpg",
      title: "Nocturne: Blue and Gold\u2014Southampton Water", artist: "James McNeill Whistler", date: "1872",
      alt: "A serene nocturne with golden lights reflected on dark water" },

    { id: 64745, image_id: "ee3eaad2-d2f4-5f04-9fb0-db581bc1d06d", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Life%2C_art%2C_and_letters_of_George_Inness_%28IA_lifeletters00inne%29.pdf/page1-500px-Life%2C_art%2C_and_letters_of_George_Inness_%28IA_lifeletters00inne%29.pdf.jpg",
      title: "The Moon at Night", artist: "George Inness", date: "1890",
      alt: "A contemplative moonlit landscape with deep, quiet tones" },

    // ── Flowers & Still Life ─────────────────────────

    { id: 110982, image_id: "bdb9f780-83be-dd12-191d-54a77c5444ab", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Odilon_Redon_-_Still_Life_with_Flowers_-_1988.141.22_-_Art_Institute_of_Chicago.jpg/1920px-Odilon_Redon_-_Still_Life_with_Flowers_-_1988.141.22_-_Art_Institute_of_Chicago.jpg",
      title: "Still Life with Flowers", artist: "Odilon Redon", date: "1905",
      alt: "A dreamlike vase of vibrant flowers in rich, luminous colours" },

    { id: 16617, image_id: "479aff61-784e-e833-fd82-50ba8c819514", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Pierre-Auguste_Renoir_-_Chrysanthemums_-_1933.1173_-_Art_Institute_of_Chicago.jpg/1920px-Pierre-Auguste_Renoir_-_Chrysanthemums_-_1933.1173_-_Art_Institute_of_Chicago.jpg",
      title: "Chrysanthemums", artist: "Pierre-Auguste Renoir", date: "1881\u201382",
      alt: "A lush arrangement of chrysanthemums in warm, glowing tones" },

    { id: 72180, image_id: "94245750-c169-eb03-673e-cd03f718f885", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Henri_Fantin-Latour_-_Still_Life_with_Flowers_-_1988.260_-_Art_Institute_of_Chicago.jpg/1920px-Henri_Fantin-Latour_-_Still_Life_with_Flowers_-_1988.260_-_Art_Institute_of_Chicago.jpg",
      title: "Still Life with Flowers", artist: "Henri Fantin-Latour", date: "1881",
      alt: "An elegant arrangement of flowers painted with exquisite realism" },

    { id: 20534, image_id: "7abbfd97-fb03-2366-cfe5-b53738a3d93e", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Henri_Fantin-Latour_-_Roses_in_a_Bowl_-_1964.203_-_Art_Institute_of_Chicago.jpg/1920px-Henri_Fantin-Latour_-_Roses_in_a_Bowl_-_1964.203_-_Art_Institute_of_Chicago.jpg",
      title: "Roses in a Bowl", artist: "Henri Fantin-Latour", date: "1881",
      alt: "Delicate pink roses arranged in a bowl with soft light" },

    { id: 100829, image_id: "0729fbba-51e3-a2d7-6d4d-61c2be62af3f", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Martin_Johnson_Heade_-_Magnolias_on_Light_Blue_Velvet_Cloth_-_1983.791_-_Art_Institute_of_Chicago.jpg/1920px-Martin_Johnson_Heade_-_Magnolias_on_Light_Blue_Velvet_Cloth_-_1983.791_-_Art_Institute_of_Chicago.jpg",
      title: "Magnolias on Light Blue Velvet Cloth", artist: "Martin Johnson Heade", date: "1885\u201395",
      alt: "Luminous white magnolia blossoms resting on pale blue velvet" },

    { id: 64029, image_id: "599e0546-ed58-0224-a623-39a8e3b51ef8", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Jan_Brueghel%2C_the_elder_-_Bouquet_of_Flowers_in_an_Earthenware_Vase_-_1948.570_-_Art_Institute_of_Chicago.jpg/1920px-Jan_Brueghel%2C_the_elder_-_Bouquet_of_Flowers_in_an_Earthenware_Vase_-_1948.570_-_Art_Institute_of_Chicago.jpg",
      title: "Bouquet of Flowers in an Earthenware Vase", artist: "Jan Brueghel, the elder", date: "c. 1610",
      alt: "A magnificent bouquet of colourful flowers in a ceramic vase" },

    { id: 94240, image_id: "d424c734-f5c1-5f89-3bb8-d83e4e0287e3", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Odilon_Redon_-_Flowers%2C_Poppies_and_Daisies_-_1977.605_-_Art_Institute_of_Chicago.jpg/1920px-Odilon_Redon_-_Flowers%2C_Poppies_and_Daisies_-_1977.605_-_Art_Institute_of_Chicago.jpg",
      title: "Flowers: Poppies and Daisies", artist: "Odilon Redon", date: "c. 1867",
      alt: "Vivid red poppies and white daisies in a lively still life" },

    { id: 14561, image_id: "96f23681-9701-a668-5c3f-6ffa951f7ecc", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Paul_C%C3%A9zanne_-_The_Vase_of_Tulips_-_1933.423_-_Art_Institute_of_Chicago.jpg",
      title: "The Vase of Tulips", artist: "Paul C\u00e9zanne", date: "c. 1890",
      alt: "Bold tulips in a vase, painted with C\u00e9zanne\u2019s rich, structured brushwork" },

    { id: 111436, image_id: "52ac8996-3460-cf71-cb42-5c4d0aa29b74", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Paul_C%C3%A9zanne_-_The_Basket_of_Apples_-_1926.252_-_Art_Institute_of_Chicago.jpg/1920px-Paul_C%C3%A9zanne_-_The_Basket_of_Apples_-_1926.252_-_Art_Institute_of_Chicago.jpg",
      title: "The Basket of Apples", artist: "Paul C\u00e9zanne", date: "c. 1893",
      alt: "Apples tumbling from a basket in C\u00e9zanne\u2019s iconic still life" },

    { id: 145807, image_id: "79b94ddd-e208-1993-01ab-98f75174fe88", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/John_Singer_Sargent_-_Thistles_-_1996.446_-_Art_Institute_of_Chicago.jpg/1920px-John_Singer_Sargent_-_Thistles_-_1996.446_-_Art_Institute_of_Chicago.jpg",
      title: "Thistles", artist: "John Singer Sargent", date: "1883\u201389",
      alt: "Wild thistles painted with bold, luminous watercolour strokes" },

    { id: 69533, image_id: "ea1e120f-2a56-99a8-99d8-ea824d466d65", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Fidelia_Bridges_-_Bird%27s_Nest_and_Ferns_-_1987.169_-_Art_Institute_of_Chicago.jpg/1920px-Fidelia_Bridges_-_Bird%27s_Nest_and_Ferns_-_1987.169_-_Art_Institute_of_Chicago.jpg",
      title: "Bird\u2019s Nest and Ferns", artist: "Fidelia Bridges", date: "1863",
      alt: "A delicate bird\u2019s nest cradled among lush green ferns" },

    // ── Japanese Woodblock Prints ────────────────────

    { id: 24645, image_id: "b3974542-b9b4-7568-fc4b-966738f61d78", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/1920px-Great_Wave_off_Kanagawa2.jpg",
      title: "Under the Wave off Kanagawa (The Great Wave)", artist: "Katsushika Hokusai", date: "1830/33",
      alt: "The iconic great wave towering over boats with Mount Fuji in the distance" },

    { id: 87005, image_id: "38726da7-8122-dc49-9243-766a1eeba9ed",
      title: "A Mild Breeze on a Fine Day (Red Fuji)", artist: "Katsushika Hokusai", date: "c. 1830/33",
      alt: "Mount Fuji glowing red-brown against a clear blue sky with wispy clouds" },

    { id: 87008, image_id: "bbb6d024-f931-2e2f-eb95-750991834b1c", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Katsushika_Hokusai_-_Shower_Below_the_Summit_%28Sanka_hakuu%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanjur..._-_Google_Art_Project.jpg/1920px-Katsushika_Hokusai_-_Shower_Below_the_Summit_%28Sanka_hakuu%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanjur..._-_Google_Art_Project.jpg",
      title: "Shower Below the Summit", artist: "Katsushika Hokusai", date: "c. 1830/33",
      alt: "Mount Fuji with dark storm clouds and lightning below the summit" },

    { id: 24800, image_id: "5f3cc8e1-a024-9d9c-4d75-a18c5fcbbe65", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ejiri_in_the_Suruga_province.jpg/1920px-Ejiri_in_the_Suruga_province.jpg",
      title: "Ejiri in Suruga Province", artist: "Katsushika Hokusai", date: "c. 1830/33",
      alt: "Wind scattering papers from travellers on a road with Fuji in the background" },

    { id: 86985, image_id: "4c778fe4-64ac-ff00-20f8-9bc456507da4", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Fuji_from_the_Tea_Plantation_of_Katakura_in_Suruga_Province_%285758988149%29.jpg/1920px-Fuji_from_the_Tea_Plantation_of_Katakura_in_Suruga_Province_%285758988149%29.jpg",
      title: "The Tea Plantation of Katakura in Suruga Province", artist: "Katsushika Hokusai", date: "c. 1830/33",
      alt: "Workers in a terraced tea plantation with Mount Fuji rising behind" },

    { id: 24601, image_id: "59031f75-1a96-8f05-cbbb-2074ac9aa099",
      title: "Umezawa Marsh in Sagami Province", artist: "Katsushika Hokusai", date: "c. 1830/33",
      alt: "Cranes taking flight from a misty marsh with Fuji in the distance" },

    { id: 86993, image_id: "18fc91b0-a044-47f8-b4ef-75f01b48452c", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Katsushika_Hokusai_-_Fuji_from_Ushibori%2C_Province_of_Hitachi_-_1940.999_-_Cleveland_Museum_of_Art.tif/lossy-page1-1920px-Katsushika_Hokusai_-_Fuji_from_Ushibori%2C_Province_of_Hitachi_-_1940.999_-_Cleveland_Museum_of_Art.tif.jpg",
      title: "Ushibori in Hitachi Province", artist: "Katsushika Hokusai", date: "c. 1830/33",
      alt: "A serene lake view with a lone boat and Fuji on the horizon" },

    { id: 24778, image_id: "446895e6-9d3c-0558-c273-84d76c26702e", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Hokusai36_tagonoura.jpg/1920px-Hokusai36_tagonoura.jpg",
      title: "Tagonoura Bay near Ejiri on the T\u014dkaid\u014d", artist: "Katsushika Hokusai", date: "1830\u201333",
      alt: "Fishermen at work in a bay with Fuji\u2019s snowy peak framed by nets" },

    { id: 24794, image_id: "8b1e0f38-cf78-74be-29c1-26b2d64462e0", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Japanese_color_prints_%28IA_japanesecolorpri00walp_16%29.pdf/page1-960px-Japanese_color_prints_%28IA_japanesecolorpri00walp_16%29.pdf.jpg",
      title: "Inume Pass in Kai Province", artist: "Katsushika Hokusai", date: "c. 1830/33",
      alt: "Travellers on a mountain pass gazing at a distant Mount Fuji" },

    { id: 26577, image_id: "89a2332f-be15-8e05-bc79-778738fdc1ef", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Catalogue_of_a_loan_exhibition_of_colour_prints_by_Ichiryusai_Hiroshige%2C_1797-1858_-_April_1912%2C_the_Art_Institute_of_Chicago_%28IA_catalogueofloane00unse_2%29.pdf/page1-960px-Catalogue_of_a_loan_exhibition_of_colour_prints_by_Ichiryusai_Hiroshige%2C_1797-1858_-_April_1912%2C_the_Art_Institute_of_Chicago_%28IA_catalogueofloane00unse_2%29.pdf.jpg",
      title: "Plum Garden at Kameido", artist: "Utagawa Hiroshige", date: "1857",
      alt: "A striking view of plum blossoms through a gnarled branch in the foreground" },

    { id: 25417, image_id: "f4865c67-4277-dbca-7503-c0d45cf4b4e1", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Catalogue_of_a_loan_exhibition_of_colour_prints_by_Ichiryusai_Hiroshige%2C_1797-1858_-_April_1912%2C_the_Art_Institute_of_Chicago_%28IA_catalogueofloane00unse_2%29.pdf/page1-960px-Catalogue_of_a_loan_exhibition_of_colour_prints_by_Ichiryusai_Hiroshige%2C_1797-1858_-_April_1912%2C_the_Art_Institute_of_Chicago_%28IA_catalogueofloane00unse_2%29.pdf.jpg",
      title: "Twilight Moon at the Ry\u014dgoku Bridge", artist: "Utagawa Hiroshige", date: "c. 1831",
      alt: "A crescent moon above the Ry\u014dgoku Bridge at twilight" },

    { id: 18307, image_id: "b0416125-7910-a0a3-75bb-b01f935c2af3", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Shirasuka_Reisho_Tokaido.jpg",
      title: "Shirasuka: Shiomi Slope", artist: "Utagawa Hiroshige", date: "1847\u201352",
      alt: "Travellers on a coastal slope overlooking the sea" },

    { id: 18298, image_id: "c3a36334-8459-a469-7691-42f5176d79a6", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Catalogue_of_a_loan_exhibition_of_colour_prints_by_Ichiryusai_Hiroshige%2C_1797-1858_-_April_1912%2C_the_Art_Institute_of_Chicago_%28IA_catalogueofloane00unse_2%29.pdf/page1-960px-Catalogue_of_a_loan_exhibition_of_colour_prints_by_Ichiryusai_Hiroshige%2C_1797-1858_-_April_1912%2C_the_Art_Institute_of_Chicago_%28IA_catalogueofloane00unse_2%29.pdf.jpg",
      title: "Okabe: Mount Utsu", artist: "Utagawa Hiroshige", date: "1847\u201352",
      alt: "A mountain path through lush greenery" },

    { id: 10926, image_id: "c047003a-949c-a581-7c5a-2c415e8cac75", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Mishima_Asa-Giri-%E6%9D%B1%E6%B5%B7%E9%81%93%E4%BA%94%E5%8D%81%E4%B8%89%E6%AC%A1%E4%B9%8B%E5%86%85_%E4%B8%89%E5%B3%B6_%E6%9C%9D%E9%9C%A7-Morning_Mist_MET_DP123235.jpg/1920px-Mishima_Asa-Giri-%E6%9D%B1%E6%B5%B7%E9%81%93%E4%BA%94%E5%8D%81%E4%B8%89%E6%AC%A1%E4%B9%8B%E5%86%85_%E4%B8%89%E5%B3%B6_%E6%9C%9D%E9%9C%A7-Morning_Mist_MET_DP123235.jpg",
      title: "Mishima: Morning Mist", artist: "Utagawa Hiroshige", date: "c. 1833/34",
      alt: "Travellers emerging from morning mist with Mount Fuji beyond" },

    { id: 3652, image_id: "e5dfa01d-b460-73e4-9c40-112385fce56b",
      title: "Togetsu Bridge at Arashiyama in Yamashiro Province", artist: "Katsushika Hokusai", date: "c. 1833/34",
      alt: "The Togetsu Bridge spanning a river at Arashiyama with mountains behind" },

    { id: 25110, image_id: "e81e632c-2e27-d79c-527d-365519796f9f",
      title: "Chrysanthemum and Horsefly", artist: "Katsushika Hokusai", date: "c. 1831\u201333",
      alt: "A delicate chrysanthemum bloom with a tiny horsefly, in vivid colour" },

    { id: 12530, image_id: "02a480dc-a4d3-5be8-14ee-5ac0e81efc41", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ando_Hiroshige_-_Mt._Kyodai_and_the_Moon_Reflected_in_the_Rice_Fields_at_Sarashina_in_Shinano_Province%2C_No._25_-_Google_Art_Project.jpg",
      title: "Shinano Province: The Moon Reflected in the Sarashina Rice Fields", artist: "Utagawa Hiroshige", date: "1853",
      alt: "A full moon reflected in still rice paddy water, mountains beyond" },

    { id: 21720, image_id: "cc5fce96-3635-35da-e7fd-a68f4b2a26c3", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Japanese_prints_and_rare_Japanese_books%2C_kakemono%2C_makemono%2C_netsuke%2C_surimono_%28IA_japaneseprintsra00walp_0%29.pdf/page1-960px-Japanese_prints_and_rare_Japanese_books%2C_kakemono%2C_makemono%2C_netsuke%2C_surimono_%28IA_japaneseprintsra00walp_0%29.pdf.jpg",
      title: "Cranes on Snow-Covered Pine", artist: "Katsushika Hokusai", date: "c. 1834",
      alt: "Elegant cranes perched on a snow-laden pine branch" },

    // ── American Landscape ───────────────────────────

    { id: 64729, image_id: "ef96e79b-f481-8114-0804-4bd39c101983", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/0/02/George_Inness_-_Early_Morning%2C_Tarpon_Springs_-_1911.32_-_Art_Institute_of_Chicago.jpg",
      title: "Early Morning, Tarpon Springs", artist: "George Inness", date: "1892",
      alt: "Soft early morning light glowing through trees at Tarpon Springs" },

    { id: 110561, image_id: "faeeb5d7-0366-f3c4-5251-63cd5fdc9148", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/George_Inness_-_A_Silver_Morning_-_1925.38_-_Art_Institute_of_Chicago.jpg",
      title: "A Silver Morning", artist: "George Inness", date: "1886",
      alt: "A silvery morning light spreading across a quiet landscape" },

    { id: 68792, image_id: "3d2d0842-312e-8d48-708b-d6adde0777bf", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/George_Inness_-_A_Marine_-_1913.90_-_Art_Institute_of_Chicago.jpg/1920px-George_Inness_-_A_Marine_-_1913.90_-_Art_Institute_of_Chicago.jpg",
      title: "A Marine", artist: "George Inness", date: "c. 1874\u201375",
      alt: "A contemplative marine scene with soft, atmospheric tones" },

    { id: 14556, image_id: "90bc0cec-0d4e-9af5-3912-52a082a428e5", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Paul_C%C3%A9zanne_-_Auvers%2C_Panoramic_View_-_1933.422_-_Art_Institute_of_Chicago.jpg/1920px-Paul_C%C3%A9zanne_-_Auvers%2C_Panoramic_View_-_1933.422_-_Art_Institute_of_Chicago.jpg",
      title: "Auvers, Panoramic View", artist: "Paul C\u00e9zanne", date: "1873\u201375",
      alt: "A panoramic view of the village of Auvers with fields and rooftops" },

    // ── Coastal & Maritime ───────────────────────────

    { id: 38666, image_id: "1de73bb7-52d6-e099-f4e1-763e201e78fa", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Winslow_Homer_-_The_Water_Fan_%281898-99%29.jpg/1920px-Winslow_Homer_-_The_Water_Fan_%281898-99%29.jpg",
      title: "The Water Fan", artist: "Winslow Homer", date: "1898/99",
      alt: "Waves crashing on tropical rocks with crystal-clear water" },

    { id: 16834, image_id: "5ca8e39e-8cf3-b0e1-a4a2-b54444954de3", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Winslow_Homer_-_Sunshine_and_Shadow%2C_Prout%27s_Neck.jpg/1920px-Winslow_Homer_-_Sunshine_and_Shadow%2C_Prout%27s_Neck.jpg",
      title: "Sunshine and Shadow, Prout\u2019s Neck", artist: "Winslow Homer", date: "1894",
      alt: "Sunlight and shadow playing across coastal rocks and breaking waves" },

    { id: 16821, image_id: "32106368-7e47-4c41-b05b-8df4c415cc79", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Winslow_Homer_-_Prout%27s_Neck%2C_Evening_%28c.1894%29.jpg/1920px-Winslow_Homer_-_Prout%27s_Neck%2C_Evening_%28c.1894%29.jpg",
      title: "Prout\u2019s Neck, Evening", artist: "Winslow Homer", date: "c. 1894",
      alt: "A quiet evening at Prout\u2019s Neck with waves rolling onto rocky shore" },

    { id: 16800, image_id: "2ba29e23-e11f-1346-971f-a8c63f94bc54", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Winslow_Homer_-_Boy_in_Boat%2C_Gloucester.jpg/1920px-Winslow_Homer_-_Boy_in_Boat%2C_Gloucester.jpg",
      title: "Boy in Boat, Gloucester", artist: "Winslow Homer", date: "1880/81",
      alt: "A boy in a small boat on calm harbour waters at Gloucester" },

    // ── Parks & Gardens ──────────────────────────────

    { id: 27992, image_id: "2d484387-2509-5e8e-2c43-22f9981972eb", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1920px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
      title: "A Sunday on La Grande Jatte \u2014 1884", artist: "Georges Seurat", date: "1884\u201386",
      alt: "Parisians relaxing in a sunlit park by the river, painted in dots of colour" },

    { id: 95654, image_id: "26e1c560-acca-3148-46dc-c144ac22bd3e", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Pierre-Auguste_Renoir_-_Near_the_Lake_-_1922.439_-_Art_Institute_of_Chicago.jpg/1920px-Pierre-Auguste_Renoir_-_Near_the_Lake_-_1922.439_-_Art_Institute_of_Chicago.jpg",
      title: "Near the Lake", artist: "Pierre-Auguste Renoir", date: "1879\u201380",
      alt: "A man and girl by a fence near a bright, sparkling lake" },

    { id: 16629, image_id: "3e005f8a-d37f-871b-15bb-89756f1ed2e9", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Pierre-Auguste_Renoir_-_Fruits_of_the_Midi_-_1933.1176_-_Art_Institute_of_Chicago.jpg/1920px-Pierre-Auguste_Renoir_-_Fruits_of_the_Midi_-_1933.1176_-_Art_Institute_of_Chicago.jpg",
      title: "Fruits of the Midi", artist: "Pierre-Auguste Renoir", date: "1881",
      alt: "A vibrant display of Mediterranean fruits in warm, sunlit colours" },

    // ── Turner & Atmospheric ─────────────────────────

    { id: 4796, image_id: "8641479e-c93e-f1a8-9925-19be061706da", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fishing_Boats_with_Hucksters_Bargaining_for_Fish%2C_1837-1838%2C_by_Joseph_Mallord_William_Turner_-_Art_Institute_of_Chicago_-_DSC09542.JPG/1920px-Fishing_Boats_with_Hucksters_Bargaining_for_Fish%2C_1837-1838%2C_by_Joseph_Mallord_William_Turner_-_Art_Institute_of_Chicago_-_DSC09542.JPG",
      title: "Fishing Boats with Hucksters Bargaining", artist: "Joseph Mallord William Turner", date: "1837\u201338",
      alt: "Fishing boats in golden light with figures on the shore" },

    // ── Panoramic Views ──────────────────────────────

    { id: 16439, image_id: "e8f3fd3f-2098-1c68-1867-b5dccb21018e", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Morning%2C_1760%2C_by_Claude-Joseph_Vernet_-_Art_Institute_of_Chicago_-_DSC09460.JPG/1920px-Morning%2C_1760%2C_by_Claude-Joseph_Vernet_-_Art_Institute_of_Chicago_-_DSC09460.JPG",
      title: "Morning", artist: "Claude Joseph Vernet", date: "1760",
      alt: "A luminous harbour scene bathed in soft morning light" },

    { id: 68433, image_id: "3826e366-e82a-e853-12e4-b303a1618103", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Henri_Rousseau_-_Sawmill%2C_Outskirts_of_Paris_-_1950.133_-_Art_Institute_of_Chicago.jpg/1920px-Henri_Rousseau_-_Sawmill%2C_Outskirts_of_Paris_-_1950.133_-_Art_Institute_of_Chicago.jpg",
      title: "Sawmill, Outskirts of Paris", artist: "Henri Rousseau", date: "c. 1893/95",
      alt: "A naive, dreamlike scene of a sawmill on the outskirts of Paris" },

    // ── Van Gogh ─────────────────────────────────────

    { id: 64957, image_id: "f11bd233-6cc3-4221-59eb-f7363be4119e", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Grapes%2C_Lemons%2C_Pears%2C_and_Apples_-_1949.215_-_Art_Institute_of_Chicago.jpg/1920px-Vincent_van_Gogh_-_Grapes%2C_Lemons%2C_Pears%2C_and_Apples_-_1949.215_-_Art_Institute_of_Chicago.jpg",
      title: "Grapes, Lemons, Pears, and Apples", artist: "Vincent van Gogh", date: "1887",
      alt: "A lively arrangement of colourful fruit in Van Gogh\u2019s expressive style" },

    // ── Hokusai Nature Studies ────────────────────────

    { id: 25183, image_id: "5afdcd6d-d946-ae18-469e-d193c56f5d45",
      title: "Ono Falls on the Kisokaid\u014d Road", artist: "Katsushika Hokusai", date: "c. 1833",
      alt: "A dramatic waterfall cascading down a cliff face" },

    { id: 25201, image_id: "778f5ecd-af29-b0d0-6c15-6b4a603dfa0d", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/%E8%AB%B8%E5%9C%8B%E7%80%A7%E5%BB%BB%E3%83%AA_%E6%9C%A8%E6%9B%BD%E8%B7%AF%E3%83%8E%E5%A5%A5_%E9%98%BF%E5%BD%8C%E9%99%80%E3%83%B6%E7%80%A7-The_Amida_Falls_in_the_Far_Reaches_of_the_Kisokaid%C5%8D_Road_%28Kisoji_no_oku_Amida-ga-taki%29%2C_from_the_series_A_Tour_of_Waterfalls_in_Various_Provinces_%28Shokoku_taki_meguri%29_MET_DP141251.jpg/1920px-thumbnail.jpg",
      title: "Amida Falls in the Far Reaches of the Kisokaid\u014d", artist: "Katsushika Hokusai", date: "c. 1833",
      alt: "A single column of water falling between dark rock faces" },

    // ── Contemplative Interiors & Figures ─────────────

    { id: 60656, image_id: "0850f3ab-a29d-acc7-0d3b-0551ceeea5ed", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/The_Star%2C_1879-81%2C_1980.414.jpg/1920px-The_Star%2C_1879-81%2C_1980.414.jpg",
      title: "The Star", artist: "Hilaire Germain Edgar Degas", date: "1879/81",
      alt: "A ballerina in the spotlight, captured in a moment of grace" },

    // ── Renoir Light Studies ─────────────────────────

    { id: 64001, image_id: "b2bc0fc2-8d17-1fcd-8cae-8626421c11ef", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Catalogue_of_an_exhibition_of_modern_French_painting%2C_from_Manet_to_Matisse%2C_Toronto%2C_1933.pdf/page1-960px-Catalogue_of_an_exhibition_of_modern_French_painting%2C_from_Manet_to_Matisse%2C_Toronto%2C_1933.pdf.jpg",
      title: "Apples", artist: "Henri Matisse", date: "1916",
      alt: "Bold, colourful apples painted with Matisse\u2019s joyful simplicity" },

    // ── Photography ──────────────────────────────────

    { id: 126481, image_id: "74fa185b-6163-aae0-a040-6907cc1fd15d", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Gustave_Le_Gray_-_Solar_Effect_in_the_Clouds--Ocean_%28Effet_de_soleil_dans_les_nuages--ocean%29_-_Google_Art_Project.jpg/1920px-Gustave_Le_Gray_-_Solar_Effect_in_the_Clouds--Ocean_%28Effet_de_soleil_dans_les_nuages--ocean%29_-_Google_Art_Project.jpg",
      title: "Solar Effect in the Clouds\u2014Ocean", artist: "Gustave Le Gray", date: "1856/57",
      alt: "Dramatic sunlight breaking through clouds over the ocean" },

    // ── Evening & Nocturnes ──────────────────────────

    { id: 234877, image_id: "585675bb-6b89-3c49-eb28-4bc4b2bbe500", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Akseli_gallen-kallela%2C_ad_astra%2C_1894.jpg/1920px-Akseli_gallen-kallela%2C_ad_astra%2C_1894.jpg",
      title: "Ad Astra", artist: "Akseli Gallen-Kallela", date: "1894\u201396",
      alt: "A mystical nocturnal scene reaching toward the stars" },

    // ── Additional Landscapes ────────────────────────

    { id: 874, image_id: "3a34f988-f779-2e96-1786-8945b6b9c87d", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Jean_Charles_Cazin_-_Landscape_-_1894.1037_-_Art_Institute_of_Chicago.jpg/1920px-Jean_Charles_Cazin_-_Landscape_-_1894.1037_-_Art_Institute_of_Chicago.jpg",
      title: "Landscape", artist: "Jean Charles Cazin", date: "c. 1895",
      alt: "Linens drying on a fence under a softly overcast sky" },

    { id: 66958, image_id: "9d0b3787-9300-717b-fafb-4f21fc6e4d43", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/The_Magazine_of_art_%28IA_magazineofart16unse%29.pdf/page1-1280px-The_Magazine_of_art_%28IA_magazineofart16unse%29.pdf.jpg",
      title: "Sunset", artist: "Auguste Rodin", date: "n.d.",
      alt: "An atmospheric watercolour study of sunset by Rodin" },

    { id: 20535, image_id: "350b7e7f-e1d8-e58b-8890-0ef6b04afe18", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Claude_Monet_-_%C3%89tretat%2C_The_Beach_and_the_Falaise_d%27Amont_-_1964.204_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_%C3%89tretat%2C_The_Beach_and_the_Falaise_d%27Amont_-_1964.204_-_Art_Institute_of_Chicago.jpg",
      title: "\u00c9tretat: The Beach and the Falaise d\u2019Amont", artist: "Claude Monet", date: "1885",
      alt: "The dramatic chalk cliffs and beach at \u00c9tretat" },

    { id: 20545, image_id: "2765aee9-3d78-ec6c-5c66-a1d9dc8173f6", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Rocks_at_Port-Goulphar%2C_Belle-%C3%8Ele_Claude_Monet_MASP_2025_-_S%C3%A3o_Paulo_-_A_Ecologia_de_Monet.jpg/1920px-Rocks_at_Port-Goulphar%2C_Belle-%C3%8Ele_Claude_Monet_MASP_2025_-_S%C3%A3o_Paulo_-_A_Ecologia_de_Monet.jpg",
      title: "Rocks at Port-Goulphar, Belle-\u00cele", artist: "Claude Monet", date: "1886",
      alt: "Rugged coastal rocks in vivid blues and purples at Belle-\u00cele" },

    { id: 16544, image_id: "e9179922-f68d-34c5-481d-abf49e046863", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Monet_-_Charing_Cross_Bridge%2C_London%2C_1901.jpg/1920px-Monet_-_Charing_Cross_Bridge%2C_London%2C_1901.jpg",
      title: "Charing Cross Bridge, London", artist: "Claude Monet", date: "1901",
      alt: "Charing Cross Bridge shrouded in London\u2019s atmospheric haze" },

    { id: 16549, image_id: "c12058f4-188f-c6ed-f0fe-52b32acfb296", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Claude_Monet_-_Apples_and_Grapes_-_1933.1152_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Apples_and_Grapes_-_1933.1152_-_Art_Institute_of_Chicago.jpg",
      title: "Apples and Grapes", artist: "Claude Monet", date: "1880",
      alt: "A warm still life of apples and grapes in golden light" },

    { id: 108583, image_id: "4d5a6178-a330-708a-c7eb-cfa20c3f66af", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Monet_-_Cliffs_and_Sea%2C_Sainte-Adresse%2C_c._1864%2C_1987.56.jpg/1920px-Monet_-_Cliffs_and_Sea%2C_Sainte-Adresse%2C_c._1864%2C_1987.56.jpg",
      title: "Cliffs and Sea, Sainte-Adresse", artist: "Claude Monet", date: "c. 1864",
      alt: "Early Monet seascape with chalk cliffs and open water" },

    { id: 60755, image_id: "12086520-2e48-cc75-df86-916bb801e61f", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Jacob_van_Ruisdael_-_Landscape_with_the_Ruins_of_the_Castle_of_Egmond.jpg/1920px-Jacob_van_Ruisdael_-_Landscape_with_the_Ruins_of_the_Castle_of_Egmond.jpg",
      title: "Landscape with the Ruins of the Castle of Egmond", artist: "Jacob van Ruisdael", date: "1650\u201355",
      alt: "A Dutch landscape with castle ruins beneath a dramatic sky" },

    { id: 16571, image_id: "0f1cc0e0-e42e-be16-3f71-2022da38cb93", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Claude_Monet_-_Arrival_of_the_Normandy_Train%2C_Gare_Saint-Lazare_-_Google_Art_Project.jpg/1920px-Claude_Monet_-_Arrival_of_the_Normandy_Train%2C_Gare_Saint-Lazare_-_Google_Art_Project.jpg",
      title: "Arrival of the Normandy Train, Gare Saint-Lazare", artist: "Claude Monet", date: "1877",
      alt: "Steam and light filling the Gare Saint-Lazare train station" },

    { id: 23119, image_id: "1e452e34-3a2b-0dca-35c3-c7236c612985", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Exhibition_of_paintings_by_the_late_William_Keith%2C_the_Art_Institute_of_Chicago%2C_April_22_to_May_6%2C_1913_%28IA_exhibitionofpain00arti_0%29.pdf/page1-500px-Exhibition_of_paintings_by_the_late_William_Keith%2C_the_Art_Institute_of_Chicago%2C_April_22_to_May_6%2C_1913_%28IA_exhibitionofpain00arti_0%29.pdf.jpg",
      title: "Village Among the Trees", artist: "Master of the Small Landscapes", date: "c. 1560",
      alt: "A charming village nestled among trees in a Flemish landscape" },

    { id: 62450, image_id: "87d426ca-4537-1386-50bf-6c2d5a5d7d17", wiki_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Louise_Moillon_-_Still_Life_with_a_Basket_of_Fruit_and_a_Bunch_of_Asparagus_-_1948.78_-_Art_Institute_of_Chicago.jpg/1920px-Louise_Moillon_-_Still_Life_with_a_Basket_of_Fruit_and_a_Bunch_of_Asparagus_-_1948.78_-_Art_Institute_of_Chicago.jpg",
      title: "Still Life with a Basket of Fruit and a Bunch of Asparagus", artist: "Louise Moillon", date: "1630",
      alt: "A beautifully arranged basket of fruit in rich, warm tones" }
];
