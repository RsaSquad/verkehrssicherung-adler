import os, re

lueneburg_path = r'c:\Users\mtopc\Documents\Workspace\Verkehrssicherung\verkehrsabsicherung-lueneburg\index.html'
buxtehude_path = r'c:\Users\mtopc\Documents\Workspace\Verkehrssicherung\baustellenabsicherung-buxtehude\index.html'

with open(lueneburg_path, 'r', encoding='utf-8') as f:
    va = f.read()

with open(buxtehude_path, 'r', encoding='utf-8') as f:
    ba = f.read()

va = va.replace('Lüneburg', 'Hamburg')
va = va.replace('Hansestadt Hamburg', 'Freie und Hansestadt Hamburg')
va = va.replace('Stadtverwaltung Hamburg', 'Behörde für Verkehr und Mobilitätswende')
va = va.replace('Landkreis Hamburg', 'Bundesland Hamburg')
va = va.replace('DE-NI', 'DE-HH')

va_crosslinks = '''
                    <a href="../verkehrsabsicherung-norderstedt/" class="cross-link__item">
                        <span class="cross-link__city">Norderstedt</span>
                        <span class="cross-link__region">Schleswig-Holstein</span>
                    </a>
                    <a href="../verkehrsabsicherung-pinneberg/" class="cross-link__item">
                        <span class="cross-link__city">Pinneberg</span>
                        <span class="cross-link__region">Schleswig-Holstein</span>
                    </a>
                    <a href="../verkehrsabsicherung-ahrensburg/" class="cross-link__item">
                        <span class="cross-link__city">Ahrensburg</span>
                        <span class="cross-link__region">Schleswig-Holstein</span>
                    </a>
                    <a href="../verkehrsabsicherung-reinbek/" class="cross-link__item">
                        <span class="cross-link__city">Reinbek</span>
                        <span class="cross-link__region">Schleswig-Holstein</span>
                    </a>
                    <a href="../verkehrsabsicherung-bergedorf/" class="cross-link__item">
                        <span class="cross-link__city">Bergedorf</span>
                        <span class="cross-link__region">Hamburg</span>
                    </a>
                    <a href="../verkehrsabsicherung-harburg/" class="cross-link__item">
                        <span class="cross-link__city">Harburg</span>
                        <span class="cross-link__region">Hamburg</span>
                    </a>
                    <a href="../verkehrsabsicherung-buxtehude/" class="cross-link__item">
                        <span class="cross-link__city">Buxtehude</span>
                        <span class="cross-link__region">Niedersachsen</span>
                    </a>
                    <a href="../verkehrsabsicherung-elmshorn/" class="cross-link__item">
                        <span class="cross-link__city">Elmshorn</span>
                        <span class="cross-link__region">Schleswig-Holstein</span>
                    </a>
'''
va = re.sub(r'<div class="cross-links__grid reveal">.*?</div>', '<div class="cross-links__grid reveal">' + va_crosslinks + '</div>', va, flags=re.DOTALL)

ba = ba.replace('Buxtehude', 'Hamburg')
ba = ba.replace('Landkreis Stade', 'Bundesland Hamburg')
ba = ba.replace('Kreisverwaltung Stade', 'Landesbetrieb Straßen, Brücken und Gewässer (LSBG)')
ba = ba.replace('DE-NI', 'DE-HH')

ba_crosslinks = '''
                    <a href="../baustellenabsicherung-norderstedt/" class="cross-link__item">
                        <span class="cross-link__city">Norderstedt</span>
                        <span class="cross-link__region">Schleswig-Holstein</span>
                    </a>
                    <a href="../baustellenabsicherung-pinneberg/" class="cross-link__item">
                        <span class="cross-link__city">Pinneberg</span>
                        <span class="cross-link__region">Schleswig-Holstein</span>
                    </a>
                    <a href="../baustellenabsicherung-ahrensburg/" class="cross-link__item">
                        <span class="cross-link__city">Ahrensburg</span>
                        <span class="cross-link__region">Schleswig-Holstein</span>
                    </a>
                    <a href="../baustellenabsicherung-reinbek/" class="cross-link__item">
                        <span class="cross-link__city">Reinbek</span>
                        <span class="cross-link__region">Schleswig-Holstein</span>
                    </a>
                    <a href="../baustellenabsicherung-bergedorf/" class="cross-link__item">
                        <span class="cross-link__city">Bergedorf</span>
                        <span class="cross-link__region">Hamburg</span>
                    </a>
                    <a href="../baustellenabsicherung-harburg/" class="cross-link__item">
                        <span class="cross-link__city">Harburg</span>
                        <span class="cross-link__region">Hamburg</span>
                    </a>
                    <a href="../baustellenabsicherung-buxtehude/" class="cross-link__item">
                        <span class="cross-link__city">Buxtehude</span>
                        <span class="cross-link__region">Niedersachsen</span>
                    </a>
                    <a href="../baustellenabsicherung-elmshorn/" class="cross-link__item">
                        <span class="cross-link__city">Elmshorn</span>
                        <span class="cross-link__region">Schleswig-Holstein</span>
                    </a>
'''
ba = re.sub(r'<div class="cross-links__grid reveal">.*?</div>', '<div class="cross-links__grid reveal">' + ba_crosslinks + '</div>', ba, flags=re.DOTALL)

os.makedirs(r'c:\Users\mtopc\Documents\Workspace\Verkehrssicherung\verkehrsabsicherung-hamburg', exist_ok=True)
os.makedirs(r'c:\Users\mtopc\Documents\Workspace\Verkehrssicherung\baustellenabsicherung-hamburg', exist_ok=True)

with open(r'c:\Users\mtopc\Documents\Workspace\Verkehrssicherung\verkehrsabsicherung-hamburg\index.html', 'w', encoding='utf-8') as f:
    f.write(va)

with open(r'c:\Users\mtopc\Documents\Workspace\Verkehrssicherung\baustellenabsicherung-hamburg\index.html', 'w', encoding='utf-8') as f:
    f.write(ba)
