#PASOS
1. Crear módulo
    ```ng g m componentes/<nombre> --project=haya-fenix-library```
2. Crear componente
    ```ng g c componentes/<nombre> --project=haya-fenix-library```
3. Añadir en array **imports** del modulo principal *haya-fenix-library.module.ts* el módulo que acabamos de crear
4. Añadir en array **exports y declarations** del modulo principal *haya-fenix-library.module.ts* el componente que acabamos de crear
5. Exportar en el archivo *public-api.ts* el módulo y compoennte que acabamos de crear
